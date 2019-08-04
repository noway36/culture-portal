import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import i18n from './i18n';

import './translate.css';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 60,
    },
}));

export default function Translate() {
    useTranslation();
    const currentLanguage = i18n.language ? i18n.language : 'ru';
    const classes = useStyles();

    const changeLanguage = locale => {
        i18n.changeLanguage(locale);
    };

    const handleChange = event => {
        changeLanguage(`${event.target.value}`);
    };

    return (
        <div className="language-select">
            <FormControl
                className={classes.formControl}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Select
                    value={currentLanguage}
                    onChange={handleChange}
                    inputProps={{
                        name: 'lang',
                        id: 'controlled-open-select',
                    }}
                >
                    <MenuItem value="ru">
                        <img
                            className="language-select-image"
                            src={require('../images/language_icons/russia.png')}
                            alt="ru"
                        />
                    </MenuItem>
                    <MenuItem value="be">
                        <img
                            className="language-select-image"
                            src={require('../images/language_icons/bel.png')}
                            alt="be"
                        />
                    </MenuItem>
                    <MenuItem value="en">
                        <img
                            className="language-select-image"
                            src={require('../images/language_icons/eng.png')}
                            alt="en"
                        />
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
