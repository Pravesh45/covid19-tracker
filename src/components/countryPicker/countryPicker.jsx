import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './countryPicker.module.css';
import { fetchCountries } from '../../api/index'

const CountryPicker = ({ change }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }
        fetchAPI()
    }, [setCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => change(e.target.value)}>
                <option value="global">Global</option>
                {countries.map((item, i) => <option key={i} value={item}>{item}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;