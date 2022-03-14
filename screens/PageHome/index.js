import { useState } from "react";
import { Text, View, StyleSheet } from "react-native"
import { Card, Button, Icon, Input } from 'react-native-elements';


const PageHome = ({ navigation }) => {
    const [lokasi, setLokasi] = useState('')
    const [tujuan, setTujuan] = useState('')
    const [tgl, setTanggal] = useState('')


    const handleSearch = () => {
        console.log(lokasi)
        console.log(tujuan)
        console.log(tgl)

        navigation.navigate('Search', {
            itemId: 86,
            otherParam: { lokasi, tujuan, tgl },
        })

    }
    return (
        <>
            <View style={{ paddingBottom: 8, backgroundColor: '#679B9B', height: '100%',opacity: 0.8 }}>
                <Card containerStyle={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7,
                    borderRadius: 30,
                    marginTop: 90
                }}>
                    <Card.Title style={{fontSize: 20}}>FLY</Card.Title>
                    <Card.Divider />
                    <Text style={{ margin: 8, fontWeight: 'bold' }}>Lokasi keberangkatan</Text>
                    <Input
                        onChange={(e) => setLokasi(e.nativeEvent.text)}
                        placeholder='Indonesia'
                        isFocused={true}
                    />
                    <Text style={{ margin: 8, fontWeight: 'bold' }}>Lokasi tujuan</Text>
                    <Input
                        onChange={(e) => setTujuan(e.nativeEvent.text)}
                        placeholder='Itali'
                        isFocused={true}
                    />
                    <Text style={{ margin: 8, fontWeight: 'bold' }}>Tanggal Kebrangkatan</Text>
                    <Input
                        onChange={(e) => setTanggal(e.nativeEvent.text)}
                        placeholder='10/03/2022'
                        isFocused={true}
                    />

                    <Button
                        onPress={() => handleSearch()}
                        icon={
                            <Icon
                                name="search"
                                color="#ffffff"
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: '#637373',
                            borderRadius: 10
                        }}
                        title="Cari Sekarang"
                    />
                </Card>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },

});
export default PageHome