import React from "react";
import styles from "./App.module.css";
import { About } from "./About";
import { getFingerprint } from "./audio";

interface State {
  loading: LoadingState | null;
}

enum LoadingState {
  ProcessingAudio,
  LoadingAcoustID
}

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

    this.setState({ loading: LoadingState.ProcessingAudio });
    const fingerprint = await getFingerprint(firstFile);
    console.log(fingerprint);
    this.setState({ loading: null });
  };

  render() {
    const loading = this.state.loading;

    return (
      <About>
        <div className={styles.inputSelection}>
          {loading === null ? (
            <input
              type="file"
              onInput={e => this.handleFiles(e.currentTarget.files)}
            />
          ) : (
            loadingAsString(loading)
          )}
        </div>
      </About>
    );
  }
}

const loadingAsString = (state: LoadingState) => {
  switch (state) {
    case LoadingState.ProcessingAudio:
      return "Processing Audio...";

    case LoadingState.LoadingAcoustID:
      return "Contacting AcoustID...";
  }
};
