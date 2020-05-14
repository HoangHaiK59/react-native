import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Welcome Home',
            playlist: null,
            recently: null,
            featured: null,
            release: null,
            access_token: 'BQD3lk_CiL7yjZRiGp4_o5e_9M8YMJ25G22p655XOB1XU7hvv_DPZn-zzF6k-FWu2NS463QrnSby0rPPh_bVDOFPhaNQNxXv48x35Mbn2QZ1r2LDGaIyuzhX47XKJbSTQ5UYwpW7YAP5aiigDBoJMl5--IkkiYUhCZVNUlTQFbOeoPh2XNK_p9pdsmMDF42mmMPdzXhJtu355B19cRVNBbio2ttN1i71oOWHhk9mrtP9NSinGlQnG1rpPLzsUhg_N5u0Eks6JBFzHbXJKgRXMf3xJLR_-wcIpxDpEd-6-75s'
        }
    }

    getCurrentUserPlaylists() {
        fetch(`https://api.spotify.com/v1/me/playlists`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        }).then(res => res.status === 200 ? res.json() : null)
            .then(data => this.setState({ playlist: data }))
            .catch(error => console.log(error))
    }

    getRecentlyPlay() {
        fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        }).then(res => res.status === 200 ? res.json() : null)
            .then(data => this.setState({ recently: data }))
            .catch(error => console.log(error))
    }

    getFeaturedPlaylists() {
        fetch(`https://api.spotify.com/v1/browse/featured-playlists?country=VN&limit=10`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        }).then(res => res.status === 200 ? res.json() : null)
            .then(data => this.setState({ featured: data }))
            .catch(error => console.log(error))
    }

    getNewRelease() {
        fetch(`https://api.spotify.com/v1/browse/new-releases?country=VN&limit=10`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.state.access_token}`
            }
        }).then(res => res.status === 200 ? res.json() : null)
            .then(data => this.setState({ release: data }))
            .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getCurrentUserPlaylists();
        this.getRecentlyPlay();
        this.getFeaturedPlaylists();
        this.getNewRelease();
    }

    render() {
        return (
            <View style={styles.main}>
                {
                    this.state.playlist && this.state.recently && this.state.featured && this.state.release && <ScrollView showsVerticalScrollIndicator={false}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', paddingLeft: 15 }}>Playlist của bạn</Text>
                            <View style={styles.container}>
                                {
                                    this.state.playlist.items.map((item, id) => <View style={styles.list} key={id} >
                                        <View style={styles.item}>
                                            <Image style={styles.image} source={{ uri: item.images[0].url }} />
                                            <Text style={styles.text}>{item.name}</Text>
                                        </View>
                                    </View>)
                                }
                            </View>
                        </View>
                        <View style={{ marginTop: 30, paddingLeft: 15 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Mới phát gần đây</Text>
                            <ScrollView horizontal contentContainerStyle={{ marginTop: 5 }} showsHorizontalScrollIndicator={false}>
                                <View style={styles.window}>
                                    {
                                        this.state.recently.items.map((item, id) => <View key={id} >
                                            <View style={styles.windowItem}>
                                                <Image style={styles.windowItemImage} source={{ uri: item.track.album.images[0].url }} />
                                                <Text style={styles.windowItemText}>{item.track.name}</Text>
                                            </View>
                                        </View>)
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 20, paddingLeft: 15 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>{this.state.featured.message}</Text>
                            <ScrollView horizontal contentContainerStyle={{ marginTop: 5 }} showsHorizontalScrollIndicator={false}>
                                <View style={styles.window}>
                                    {
                                        this.state.featured.playlists.items.map((item, id) => <View key={id} >
                                            <View style={styles.windowItem}>
                                                <Image style={styles.windowItemImage} source={{ uri: item.images[0].url }} />
                                                <Text style={styles.windowItemText}>{item.name}</Text>
                                            </View>
                                        </View>)
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ marginTop: 20, paddingLeft: 15 }}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Bản phát hành mới cho bạn</Text>
                            <ScrollView horizontal contentContainerStyle={{ marginTop: 5 }} showsHorizontalScrollIndicator={false}>
                                <View style={styles.window}>
                                    {
                                        this.state.release.albums.items.map((item, id) => <View key={id} >
                                            <View style={styles.windowItem}>
                                                <Image style={styles.windowItemImage} source={{ uri: item.images[0].url }} />
                                                <Text style={styles.windowItemText}>{item.name}</Text>
                                            </View>
                                        </View>)
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </ScrollView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#1f2021',
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    list: {
        width: '45%',
        height: 64,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 4,
        marginLeft: 15,
        padding: 0,
        backgroundColor: '#3e4042'
    },
    item: {
        width: 120,
        height: 64,
        padding: 0,
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 64,
        height: 64
    },
    text: {
        marginLeft: 5,
        color: 'white',
        fontSize: 12
    },
    window: {
        width: '100%',
        height: 115,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    windowItem: {
        width: 100,
        height: '100%',
        flex: 1,
        flexDirection: 'column'
    },
    windowItemImage: {
        width: 95,
        height: 70
    },
    windowItemText: {
        color: 'white',
        fontSize: 12,
        width: 95
    }

});

export default Home;