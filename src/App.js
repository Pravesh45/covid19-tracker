import React from "react";
import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import image from "./images/image.png"

class App extends React.Component {
    cons
    state = {
        data: {},
        country: "global",
    }
    async componentDidMount() {
        const fetchedData = await fetchData(this.state.country);
        this.setState({ data: fetchedData })
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.country !== this.state.country) {
            const fetchedData = await fetchData(this.state.country);
            this.setState({ data: fetchedData })
        }
    }

    handleChange = (country) => {
        this.setState({ country: country })
    }

    render() {
        return (
            <div className={styles.container}>
                <img src={image} className={styles.image} alt="covid19" />
                <Cards data={this.state.data} loading={this.state.isLoading} />
                <CountryPicker change={this.handleChange} />
                <Charts data={this.state.data} country={this.state.country} />
            </div>
        )
    }
}
export default App