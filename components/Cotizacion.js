import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Cotozacion = ({resultado}) => {

    if(Object.keys(resultado) === 0) return null;
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado;

    return ( 
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{PRICE} </Text>
            </Text>
            <Text style={styles.texto}>Precio mas alto del dia: {' '}
                <Text style={styles.span}>{HIGHDAY} </Text>
            </Text>
            <Text style={styles.texto}>Precio mas bajo del día: {' '}
                <Text style={styles.span}>{LOWDAY}</Text>
            </Text>
            <Text style={styles.texto}>Últimas veinticuatro horas: {' '}
                <Text style={styles.span}>{CHANGEPCT24HOUR} %</Text>
            </Text>
            <Text style={styles.texto}>Última actualización: {' '}
                <Text style={styles.span}>{LASTUPDATE}</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    resultado:{
        backgroundColor: '#5E49E2',
        padding: 20
    },
    texto: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    precio:{
        fontSize: 38
    },
    span:{
        fontFamily: 'Lato-Black'
    }
})
 
export default Cotozacion;
