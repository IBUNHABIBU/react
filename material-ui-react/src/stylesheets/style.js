// styling

import { makeStyles } from '@material-ui/core/styles';

const myStyle = makeStyles(() => ({
    icon: {
        marginRight: '20px',
    },
    button: {
        marginTop: '20px'
    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',

    },
    cardMedia: {
        paddingTop: '54.24%'
    }, 
    cardContent: {
        flexGrow: 1
    }
}))

export default myStyle;