import React from "react";
import styles from "./App.module.css";
import { About } from "./About";
import { getFingerprint } from "./audio";
import { lookupByFingerprint, Result } from "./acoustid";

interface State {
  loading: LoadingState | null;
}

type LoadingState =
  | { type: "PROCESSING_AUDIO" }
  | { type: "LOADING_METADATA"; fingerprint: string }
  | { type: "LOADED"; results: Result[] };

export class App extends React.Component<{}, State> {
  state = {
    loading: null
  };

  handleFiles = async (files: FileList | null) => {
    if (!files || !files.length) {
      return;
    }

    const firstFile = files.item(0);
    if (!firstFile) {
      return;
    }

    this.setState({ loading: { type: "PROCESSING_AUDIO" } });
    const { fingerprint, duration } = await getFingerprint(firstFile);
    this.setState({ loading: { type: "LOADING_METADATA", fingerprint } });
    const results = await lookupByFingerprint(fingerprint, duration);
    this.setState({ loading: { type: "LOADED", results } });
  };

  render() {
    const loading = this.state.loading;

    return (
      <About>
        {loading === null ? (
          <FilePicker onFilePicked={this.handleFiles} />
        ) : (
          this.renderForState(loading)
        )}
      </About>
    );
  }

  renderForState(state: LoadingState) {
    switch (state.type) {
      case "PROCESSING_AUDIO":
        return <>Processing Audio...</>;

      case "LOADING_METADATA":
        return <>Loading Metadtaa...</>;

      case "LOADED":
        return <FilePicker onFilePicked={this.handleFiles} />;
    }
  }
}

interface FilePickerProps {
  onFilePicked: (file: FileList | null) => void;
}

const FilePicker = (props: FilePickerProps) => (
  <div className={styles.inputSelection}>
    <input
      type="file"
      onInput={e => props.onFilePicked(e.currentTarget.files)}
    />
  </div>
);
