import { createTheme } from "@mui/material"
import infoIcon from 'assets/images/info.png';

const appTheme = {
    primary: '#00B89F',
    secondary: '#1A1A1A',
    white: '#ffffff',
    textColor: '#606E87',
    black: '#1A1A1A',
    fontBlack: '#535353',
    dark: '#1C2125',
    inputColor: '#9C9C9C',
    popUpBg: '#272E36',
    error: '#e74747',
    success: '#00B89F'
}

const theme = createTheme({

    palette: {
        primary: {
            main: appTheme.primary,
        },
        secondary: {
            main: appTheme.secondary,
        },
    },
    typography: {
        fontFamily: [
            'montserrat-regular',
            'sf-pro-text',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    },
    overrides: {
        MuiPaper: {
            root: {
                backgroundColor: appTheme.popUpBg
            }
        },
        MuiCssBaseline: {
            '@global': {
                html: {
                    fontSize: '14px',
                    ['@media(min-width: 1200px)']: {
                        fontSize: '16px'
                    },
                    ['@media(min-width: 1600px)']: {
                        fontSize: '18px'
                    },
                    ['@media(min-width: 1920px)']: {
                        fontSize: '20px'
                    }
                },
                body: {
                    fontSize: '1rem'
                }
            }
        },
        MuiButton: {
            root: {
                textTransform: 'capitalize',
                fontSize: '1rem',
                '&.btn-lg': {
                    width: '100%',
                    borderRadius: '0.5rem',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                }
            },
            containedPrimary: {
                fontWeight: 'bold',
                '&.delete-btn': {
                    backgroundColor: appTheme.error
                },
                '&.Mui-disabled': {
                    backgroundColor: appTheme.primary
                }
            },
            sizeSmall: {
                minWidth: 'auto',
                ['@media(max-width: 567px)']: {
                    padding: '3px'
                },
            }
        },
        MuiSelect: {
            select: {
                padding: '0.75rem 2rem 0.75rem 1rem'
            }
        },
        MuiFilledInput: {
            root: {
                backgroundColor: appTheme.white,
                borderRadius: '0.5rem !important',
                color: appTheme.textColor,
                '&:hover': {
                    backgroundColor: appTheme.white
                },
                '&$focused': {
                    backgroundColor: appTheme.white
                },

            },
            input: {
                borderRadius: '0.5rem !important',
            }
        },
        MuiTextField: {
            root: {
                '&.dark .MuiFilledInput-root': {
                    backgroundColor: appTheme.dark,
                    minWidth: '20rem',
                },
                '&.dark .MuiFilledInput-root&:hover': {
                    backgroundColor: appTheme.white
                },
                '&.dark .MuiFilledInput-root$focused': {
                    backgroundColor: appTheme.white
                },
                '&.dark .MuiFormLabel-root': {
                    color: appTheme.inputColor
                },
                '&.dark .MuiFilledInput-input': {
                    color: appTheme.inputColor,
                },
                '&.withoutLabel .MuiFilledInput-input': {
                    padding: '0.75rem 1rem',
                },
                '&.chat-input .MuiOutlinedInput-root': {
                    borderRadius: '0.4rem'
                }
            }
        },
        MuiFormHelperText: {
            root: {
                color: appTheme.error,
                marginLeft: '0 !important'
            }
        },
        MuiTab: {
            root: {
                textTransform: 'capitalize',
                maxWidth: 'none',
                '&.fixed-label-width': {
                    minWidth: '11rem',
                    '&.default-cursor': {
                        cursor: 'default',
                    }
                },
                '&.align-top .MuiTab-wrapper': {
                    justifyContent: 'flex-start'
                },
                ['@media(max-width: 767px)']: {
                    minWidth: '72px !important'
                },
            },
            wrapper: {
                height: '100%',
            }
        },
        MuiTabs: {
            root: {
                '&.btn-tabs .MuiButtonBase-root': {
                    backgroundColor: appTheme.black,
                    color: appTheme.fontBlack,
                    transition: 'all 0.5s linear',
                    '&.Mui-selected': {
                        backgroundColor: appTheme.primary,
                        color: appTheme.white,
                        borderRadius: '0.5rem',
                        transition: 'all 0.5s linear'
                    },
                    '&:first-child': {
                        borderTopLeftRadius: '0.5rem',
                        borderBottomLeftRadius: '0.5rem',
                    },
                    '&:last-child': {
                        borderTopRightRadius: '0.5rem',
                        borderBottomRightRadius: '0.5rem',
                    },
                },
                '&.indicator-none .MuiTabs-indicator': {
                    display: 'none !important'
                },
                '&.btn-monitors .MuiButtonBase-root': {
                    padding: '0',
                    flexGrow: 1,
                    '&.Mui-selected .monitors': {
                        backgroundColor: appTheme.primary,
                        color: appTheme.white,
                        transition: 'all 0.5s linear'
                    },
                },
                '&.btn-monitors .MuiTab-wrapper': {
                    paddingRight: '0.5rem'
                },
            }
        },
        MuiTabScrollButton: {
            root: {
                boxShadow: '0px 0px 7px 1px rgba(0, 0, 0 , .50)',
            }
        },
        MuiDialog: {
            root: {
                '& .MuiPaper-root': {
                    backgroundColor: appTheme.popUpBg,
                    borderRadius: '0.5rem'
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.85);'
                }
            },
            paperWidthXs: {
                maxWidth: '25rem',
                overflow: 'visible',
                borderTopLeftRadius: '1.5rem !important',
                borderTopRightRadius: '1.5rem !important',
            }
        },
        MuiDialogContent: {
            root: {
                backgroundColor: appTheme.popUpBg,
                padding: '1.25rem',
                color: '#AFAFAF',
                '&.senior-info-card': {
                    overflow: 'visible',
                    borderTopLeftRadius: '1.5rem !important',
                    borderTopRightRadius: '1.5rem !important',
                }
            }
        },
        MuiSwitch: {
            track: {
                backgroundColor: '#AFAFAF'
            },
            colorPrimary: {
                '&.Mui-checked.Mui-disabled + .MuiSwitch-track': {
                    backgroundColor: appTheme.primary,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: '0.5 !important',
                    cursor: 'not-allowed',
                    backgroundColor: '#AFAFAF'
                }
            }
        },
        MuiPickersDay: {
            day: {
                color: 'rgba(255,255,255 ,0.7)',
            },
            daySelected: {
                color: appTheme.white,
            },
            dayDisabled: {
                color: 'rgba(255, 255, 255, 0.38)',
            },
            current: {
                color: appTheme.white,
            },
            dayLabel: {
                color: appTheme.primary
            }
        },
        MuiPickersToolbarText: {
            toolbarBtnSelected: {
                color: 'rgba(255, 255, 255, 0.87)'
            },
            toolbarTxt: {
                color: 'rgba(255, 255, 255, 0.55)'
            }
        },
        MuiPickersCalendarHeader: {
            iconButton: {
                backgroundColor: 'transparent !important',
                color: appTheme.primary,
                '&.Mui-disabled': {
                    color: 'rgba(0, 184, 159, 0.35)'
                },
                '&:hover': {
                    backgroundColor: 'transparent !important',
                }
            },
            dayLabel: {
                color: appTheme.primary
            },
            transitionContainer: {
                height: '30px'
            }
        },
        MuiPopover: {
            root: {
                '&.dark .MuiMenu-paper ': {
                    backgroundColor: appTheme.black,
                    color: appTheme.primary,
                    borderRadius: '0.5rem',
                    borderTopRightRadius: '0.2rem',
                    padding: '0.2rem 0.8rem'
                },

            },
            paper: {
                '&.MuiMenu-paper ': {
                    backgroundColor: appTheme.popUpBg,
                    color: "#AFAFAF",
                    borderRadius: '0.5rem',
                    // borderTopRightRadius: '0.2rem',
                    padding: '0.2rem 0.8rem',
                },
            }
        },
        MuiSnackbar: {
            root: {
                '&.error .MuiSnackbarContent-root': {
                    backgroundColor: appTheme.error,
                    paddingLeft: '2.5rem',
                    paddingRight: '1.5rem',
                    background: `url(${infoIcon}) .75rem center no-repeat`,
                    backgroundSize: '1.2rem'
                },
                '&.success .MuiSnackbarContent-root': {
                    backgroundColor: appTheme.success,
                    paddingLeft: '2.5rem',
                    paddingRight: '1.5rem',
                    background: `url(${infoIcon}) .75rem center no-repeat`,
                    backgroundSize: '1.2rem'
                }
            }
        },
        MuiButtonGroup: {
            grouped: {
                borderColor: 'transparent !important',
                fontWeight: 'normal',
                '&.MuiButton-containedSecondary': {
                    color: `${appTheme.fontBlack} !important`
                }
            },
            groupedContainedPrimary: {
                color: `${appTheme.white} !important`
            },
        },
        MuiTableContainer: {
            root: {
                width: "75%",
                height: "500px",
                borderRadius: "1rem",
                margin: "auto",
            },
        },
        MuiTableBody: {
            root: {
                '&:last-child': {
                    borderBottomRightRadius: "25rem"

                }
            }
        },
        MuiTableCell: {
            head: {
                backgroundColor: "#1e1e24 !important",
                color: "#00b89f",
                width: '50%',
                border: "none",
            },
            body: {
                color: '#AFAFAF',
                width: '50%',
                border: "none",
                backgroundColor: "#1e2730",
            },
        },
        MuiTablePagination: {
            root: {
                color: '#D8D8D8 !important',
                borderBottom: '0 !important'
            },
            selectIcon: {
                color: '#D8D8D8 !important'
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: '0.8rem',
            }
        },
        MuiListItem: {
            root: {
                '&.Mui-selected': {
                    backgroundColor: "#00b89f14",
                },
                '&.Mui-selected:hover': {
                    backgroundColor: "#00b89f14",
                }
            }
        },
    }
})

export default theme