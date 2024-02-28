import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function App() {
    return (
        <View style={style.container}>
            <View style={style.Header}>
                <ImageBackground style={style.Image} source={require('./assets/anime.jpg')}></ImageBackground>
                <Text style={style.textImage}>Welcome Back</Text>
            </View>

            <View style={style.Body}>
                <TextInput style={style.Inputs} placeholder="Email" />
                <TextInput style={style.Inputs} placeholder="Password" />
                <TouchableOpacity style={style.TextForgot}>
                    <Text>Forgot your password ?</Text>
                </TouchableOpacity>
            </View>

            <View style={style.Footer}>
                <TouchableOpacity style={style.Button}>
                    <Text style={style.ButtonText}>Login</Text>
                </TouchableOpacity>
                <View style={style.FooterContent}>
                    <Text tyle={style.TextFooter}>Don't have an account?</Text>
                    <TouchableOpacity style={style.TextLinkContainer}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: { flex: 1, marginTop: 20, justifyContent: 'center', alignItems: 'center' },
    Header: { alignItems: 'center' },
    Image: {
        height: 150,
        width: 150,
    },
    textImage: { marginTop: 10, fontSize: 30, color: '#527b92' },
    Body: {
        marginTop: 10,
        alignItems: 'flex-end',
    },
    Inputs: {
        paddingLeft: 10,
        width: 250,
        borderWidth: 1,
        height: 40,
        borderColor: '#000000',
        marginTop: 10,
    },
    TextForgot: {
        marginTop: 10,
    },
    Footer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        marginTop: 10,
        borderWidth: 1,
        width: 250,
        height: 40,
        backgroundColor: '#527b92',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    ButtonText: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
    },
    FooterContent: {
        flexDirection: 'row',
    },
    TextFooter: {},
    TextLinkContainer: { marginLeft: 10 },
    TextLink: {
        color: '#527b92',
    },
});
