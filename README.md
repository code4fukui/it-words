# it-words

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of IT-related words and definitions, with a sample web application for searching and exploring terms.

## Demo

[**Live Demo: IT Dictionary**](https://code4fukui.github.io/it-words/)

The application provides a simple, mobile-friendly interface with a search bar. As you type, the list of terms and definitions is filtered in real-time. You can also display a random term or click on highlighted keywords within a definition to perform a new search.

## Features

- **Live Search:** Instantly filters terms and definitions as you type.
- **Random Term:** Discover new words with a "Random" button.
- **Cross-Referencing:** Clickable keywords within definitions allow for easy navigation between related terms.
- **Aggregated Data:** Combines terminology from multiple sources into a single, searchable dictionary.

## Usage

### Prerequisites
- [Deno](https://deno.land/)

### Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/code4fukui/it-words.git
    cd it-words
    ```

2.  **Generate the data file:**
    The `makeCSV.js` script fetches data from remote sources, processes local files, and combines everything into `it-words.csv`.
    ```bash
    deno run --allow-read --allow-write --allow-net makeCSV.js
    ```

3.  **View the application:**
    Open `index.html` in your web browser.

## Data Sources

This project aggregates IT terminology from the following sources:

- **Sakura Cloud Certification Study Material:** Sourced from slides provided by [Sakura Internet Inc.](https://github.com/code4fukui/SakuraCloudCertificationStudyMaterial). This data is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en).
- **IchigoJam Documentation:** Sourced from the [IchigoJam-words.csv](https://ichigojam.github.io/doc/IchigoJam-words.csv) file in the [IchigoJam/doc](https://github.com/IchigoJam/doc) repository.

## License

MIT License — see [LICENSE](LICENSE).