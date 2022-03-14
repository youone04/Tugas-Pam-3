    import { Text, ScrollView, View, StyleSheet, Image } from "react-native";

    import { Card, Button, Icon, Input } from 'react-native-elements';

    const data = [
        {
            maskapai: 'GARUDA',
            lokasi: 'indonesia',
            tujuan: 'itali',
            tgl_berangkat: '10/03/2022',
            logo: 'https://cdn.icon-icons.com/icons2/1746/PNG/512/4047342-air-aircraft-airline-airliner-airplane-airport-airway_113505.png',
        },
        {
            maskapai: 'LION',
            lokasi: 'jerman',
            tujuan: 'jepang',
            tgl_berangkat: '10/04/2022',
            logo: 'https://cdn.kibrispdr.org/data/icon-pesawat-terbang-png-0.jpg',
        },
        {
            maskapai: 'SRIWIJAYA',
            lokasi: 'malaysia',
            tujuan: 'singapura',
            tgl_berangkat: '10/05/2022',
            logo: 'https://png.pngtree.com/png-vector/20190904/ourlarge/pngtree-aircraft-airplane-logo-or-label-flying-club-airlines-design-vector-png-image_1724658.jpg',
        },
        {
            maskapai: 'ETIHAD',
            lokasi: 'thailand',
            tujuan: 'china',
            tgl_berangkat: '10/06/2022',
            logo: 'https://i.pinimg.com/originals/da/51/c0/da51c000c6313d34b1cddbac21059060.jpg',
        },
        {
            maskapai: 'AIR WAYS',
            lokasi: 'rusia',
            tujuan: 'korea',
            tgl_berangkat: '10/07/2022',
            logo: 'https://thumbs.dreamstime.com/b/boeing-sky-vector-illustration-flying-view-below-81781587.jpg',
        },
        {
            maskapai: 'LINE AIR',
            lokasi: 'brunei',
            tujuan: 'swis',
            tgl_berangkat: '10/08/2022',
            logo: 'https://image.shutterstock.com/image-vector/plane-icon-logo-airplane-taking-600w-373146313.jpg',
        },
    ];

    const PageSearch = ({ route }) => {
        const { otherParam } = route.params;

        const hasil = data.filter(({ lokasi, tujuan, tgl_berangkat }) => {
            return tujuan.toLowerCase().includes(otherParam.tujuan.toLowerCase()) &&
                tgl_berangkat.toLowerCase().includes(otherParam.tgl.toLowerCase()) &&
                lokasi.toLowerCase().includes(otherParam.lokasi.toLowerCase())
        }
        )
        console.log('hasil', hasil)

        return (
            <>
            <Text style={{ textAlign: 'center', margin: 5, fontSize: 18, fontWeight: 'bold',color:'#679B9B'}}>Hasil Pencarian Penerbangan</Text>
                <ScrollView style={{ backgroundColor: '#679B9B' }}>
                    {
                        hasil.length > 0?
                        hasil.map((data, i) => {
                            return (
                                <View key={i} style={{ paddingBottom: 8 }}>
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
                                        backgroundColor: 'white'
                                    }}>

                                        <Card.Title >{data.maskapai}</Card.Title>
                                        <Card.Divider />
                                        <View style={[styles.container, {
                                            flexDirection: "row"
                                        }]}>
                                            <View style={{ flex: 1, marginRight: 6 }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Lokasi saat ini</Text>
                                                <Text style={{ marginBottom: 4, fontWeight: 'bold' }}>{data.lokasi}</Text>
                                                <Image
                                                    style={{ width: 90, height: 70 }}
                                                    source={{
                                                        uri: data.logo,
                                                    }}
                                                />
                                            </View>

                                            <View style={{ flex: 1 }} >
                                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Tujuan</Text>
                                                <Text style={{ fontWeight: 'bold' }}>{data.tujuan}</Text>
                                                <Text style={{ marginTop: 40, color: '#679B9B', fontWeight: 'bold' }}>{data.tgl_berangkat}</Text>
                                            </View>
                                        </View>
                                    </Card>
                                </View>
                            )
                        }):
                        <View>
                            <Text style={{fontSize: 20, textAlign:'center', color:'white',fontWeight:'bold',marginTop:80}}>Keyword Tidak di Temukan</Text>
                        </View>
                    }




                </ScrollView>
            </>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 20,
        },
    });
    export default PageSearch;