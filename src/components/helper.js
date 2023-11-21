import styled from "styled-components"

export const initialState = {
    deleteUser: false,
    update: false,
    updateId: null,
    userData: [],
}

export function reducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            return { ...state, deleteUser: action.payload }
        case "UPDATE":
            return { ...state, update: action.payload }
        case "UPDATEID":
            return { ...state, updateId: action.payload }
        case "DELETEID":
                return { ...state, deleteId: action.payload }    
        case "USERDATA":
            return { ...state, userData: action.payload }
        default:
            return state
    }
}

export const accordianStyle = {
    boxShadow: '1px 1px 16px 0px #e7e7e7',
    margin: '12px',
    padding: "2px",
    border: "1px solid lightgrey",
    borderRadius: "8px"
}


export const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "sans-serif",
}

export const nameTitleStyle = {
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: "sans-serif",
    marginLeft: "3%"
}

export const nameTitleInputStyle = (props) => {
    return {
        fontSize: '16px',
        fontWeight: '500',
        fontFamily: "sans-serif",
        marginLeft: "3%",
        width: "50%",
        color: "#000",
        borderRadius: '5px',
        background: "transparent",
        textDecoration: "none",
        outline: 'none',
        wordWrap: 'break-word',
        ...props,
    }
}

export const logoStyle = {
    fontSize: '20px',
    fontWeight: "600",
    fontFamily: "Georgia, serif",
    marginLeft: "3%"
}

export const subtitleHeadingStyle = {
    fontSize: '13px',
    fontWeight: "600",
    fontFamily: "sans-serif",
    color: "grey",
}

export const subtitleStyle = {
    fontSize: '12px',
    fontWeight: "500",
    fontFamily: "sans-serif",
}

export const textDescriptionStyle = {
    fontSize: '12px',
    fontWeight: "500",
    fontFamily: "sans-serif",
    textAlign: 'start',
    lineHeight: "1.5",
    wordWrap: 'break-word',
    wordSpacing: "1px"
}

export const textAreaDescriptionStyle = (props) => {
    return {
        fontSize: '12px',
        fontWeight: "500",
        fontFamily: "sans-serif",
        textAlign: 'justify',
        lineHeight: "1.5",
        wordWrap: 'break-word',
        wordSpacing: "1px",
        width: "100%",
        color: "#000",
        borderRadius: '5px',
        background: "transparent",
        resize:"none",
        ...props,    
    }
}

export const buttonStyle = (props) => {
    return {
        width: "18px",
        height: "18px",
        cursor: "pointer",
        ...props,
    }
}

export const inputFieldStyle = (props) => {
    return {
        fontSize: '12px',
        fontWeight: "500",
        fontFamily: "sans-serif",
        textAlign: "center",
        width: "100%",
        color: "#000",
        borderRadius: '5px',
        background: "#fff",
        textDecoration: "none",
        outline: 'none',
        wordWrap: 'break-word',
        ...props
    }
}

export const picStyle = { width: "90%", height: "90%", borderRadius: "50%" }

export const Wrapper = styled.div`
width:75px;
height:75px;
border:1px solid lightgrey;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
filter: drop-shadow(0 0 0.75rem purple);
`