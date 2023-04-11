import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#f4f4f4", flex: 1 }}>
                <View style={{ backgroundColor: "#4578DF", height: "12%", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingHorizontal: 20 }}>
                    <View style={{ height: 10, width: 0, marginTop: 2 }} />
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, width: "100%" }}>
                        <View style={{ width: "50%" }}>
                            <Text style={{ fontSize: 28, color: "#FFF", fontWeight: "bold" }}>Hello Ujjwal...</Text>
                        </View>
                        <View style={{ width: "50%", alignItems: "flex-end" }}>
                            <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                                <Image source={require('../images/user.png')} style={{ height: 80, width: 80 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <LinearGradient colors={["#4578DF", "transparent"]} style={{ left: 0, right: 0, height: 90, marginTop: -45 }}>
                    <View style={{ backgroundColor: "#FFF", paddingVertical: 8, paddingHorizontal: 20, marginHorizontal: 20, borderRadius: 15, marginTop: 25, flexDirection: "row", alignItems: "center" }}>
                        <TextInput placeholder="Search" placeholderTextColor="#B27C7C" style={{ fontWeight: "bold", fontSize: 18, width: 260 }} />
                        <Image source={require('../images/magnifier.png')} style={{ height: 20, width: 20 }} />
                    </View>
                </LinearGradient>

                {/*images*/}

                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20, }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')} 
                        style={{backgroundColor: "#f4f4f4"}}>
                        <Image
                            source={require('../images/started.png')}
                            style={{ width: 350, height: 200, resizeMode: 'contain', borderRadius: 20 }}
                        />
                    </TouchableOpacity>
                </View>

                {/* Categories*/}


                <View style={{ width: "50%", marginLeft: 10, marginBottom: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, color: "#4578DF" }}>Categories</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllCourses')}
                        style={{ backgroundColor: 'white', marginRight: 10, width: 105, borderRadius: 15, marginLeft: 13 }}
                    >
                        <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', }}>
                            <Image
                                source={require('../images/docker.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', backgroundColor: 'white', borderRadius: 50, }}
                            />
                            <Text style={{ marginTop: 2, textAlign: 'center', marginLeft: 5 }}>Docker</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllCourses')}
                        style={{ backgroundColor: 'white', marginRight: 10, width: 105, borderRadius: 15 }}
                    >
                        <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', }}>
                            <Image
                                source={require('../images/angular-js.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', backgroundColor: 'black', borderRadius: 50, }}
                            />
                            <Text style={{ marginTop: 2, textAlign: 'center', marginLeft: 4 }}>Angular.js</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllCourses')}
                        style={{ backgroundColor: 'white', marginRight: 10, width: 105, borderRadius: 15 }}
                    >
                        <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', }}>
                            <Image
                                source={require('../images/next-js.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', backgroundColor: 'white', borderRadius: 50, }}
                            />
                            <Text style={{ marginTop: 2, textAlign: 'center', marginLeft: 5 }}>Next.js</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/*Category line 2*/}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllCourses')}
                        style={{ backgroundColor: 'white', marginRight: 10, width: 105, borderRadius: 15, marginLeft: 13 }}
                    >
                        <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', }}>
                            <Image
                                source={require('../images/vue-js.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', backgroundColor: 'white', borderRadius: 50, }}
                            />
                            <Text style={{ marginTop: 2, textAlign: 'center', marginLeft: 5 }}>Vue.js</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllCourses')}
                        style={{ backgroundColor: 'white', marginRight: 10, width: 105, borderRadius: 15 }}
                    >
                        <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', }}>
                            <Image
                                source={require('../images/react.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', backgroundColor: 'black', borderRadius: 50, }}
                            />
                            <Text style={{ marginTop: 2, textAlign: 'center', marginLeft: 5 }}>React.js</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('AllCourses')}
                        style={{ backgroundColor: 'white', marginRight: 10, width: 105, borderRadius: 15 }}
                    >
                        <View style={{ flexDirection: 'row', height: 45, alignItems: 'center', }}>
                            <Image
                                source={require('../images/others.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', backgroundColor: 'white', borderRadius: 50, }}
                            />
                            <Text style={{ marginTop: 2, textAlign: 'center', marginLeft: 5 }}>Others</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                {/*Latest and treanding part*/}

                <View style={{ flexDirection: "row", paddingHorizontal: 10, width: "100%", alignItems: "center" }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#4578DF" }}>Latest & Trending</Text>
                    </View>
                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Latest_Trending')}>
                            <View style={{ backgroundColor: "#4578DF", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 15 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 13, color: "#FFF" }}>see all</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>



                {/*Courses Details 1st part*/}

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 300 }}
                >
                    <View style={{
                        backgroundColor: '#f4f4f4',
                        marginRight: 10,
                        marginLeft: 10,
                        width: 150,
                        height: 150,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ReactNative')}
                            style={{
                                height: 220,
                                elevation: 2,
                                backgroundColor: "#FFF",
                                marginTop: 20,
                                borderRadius: 10,
                                width: 150
                            }}>
                            <Image source={require('../images/download.png')} style={{
                                height: 160,
                                width: 150,
                                resizeMode: 'cover',
                                resizeMode: 'contain',
                                alignItems: "center",
                            }} />
                            <View style={{ flexDirection: "column", paddingTop: 2, paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold", position: 'relative'}}>React Native-The Complete Guide</Text>
                                <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2}}>$25</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: '#f4f4f4',
                        width: 150,
                        flexDirection: "column",
                        height: 150,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Angular')}
                            style={{
                                height: 220,
                                elevation: 2,
                                backgroundColor: "#FFF",
                                marginTop: 20,
                                borderRadius: 10,
                                width: 150
                            }}>
                            <Image source={require('../images/angular.png')} style={{
                                height: 150,
                                width: 150,
                                resizeMode: 'cover',
                                resizeMode: 'contain',
                                alignItems: "center",
                            }} />
                            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>Angular.js Complete Tutorial</Text>
                                <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2}}>$15</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: '#f4f4f4',
                        marginRight: 10,
                        marginLeft: 10,
                        width: 150,
                        flexDirection: "column",
                        height: 150,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Next')}
                            style={{
                                height: 220,
                                elevation: 2,
                                backgroundColor: "#FFF",
                                marginTop: 20,
                                borderRadius: 10,
                                width: 150
                            }}>
                            <Image source={require('../images/nextjs.png')} style={{
                                height: 150,
                                width: 150,
                                resizeMode: 'cover',
                                resizeMode: 'contain',
                                alignItems: "center",
                            }} />
                            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>Next.js [V2] For Beginners</Text>
                                <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2}}>$20</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>






                <View style={{ flexDirection: "row", paddingHorizontal: 10, width: "100%", alignItems: "center" }}>
                    <View style={{ width: "50%" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, color: "#4578DF" }}>Premium courses</Text>
                    </View>
                    <View style={{ width: "50%", alignItems: "flex-end" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Premium_courses')}>
                            <View style={{ backgroundColor: "#4578DF", paddingHorizontal: 20, paddingVertical: 5, borderRadius: 15 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 13, color: "#FFF" }}>see all</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>






                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ height: 300, marginBottom: 25}}
                >
                    <View style={{
                        backgroundColor: '#f4f4f4',
                        marginRight: 10,
                        marginLeft: 10,
                        width: 150,
                        height: 150,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Vue')}
                            style={{
                                height: 220,
                                elevation: 2,
                                backgroundColor: "#FFF",
                                marginTop: 20,
                                borderRadius: 10,
                                width: 150
                            }}>
                            <Image source={require('../images/vuejs.png')} style={{
                                height: 160,
                                width: 150,
                                resizeMode: 'cover',
                                resizeMode: 'contain',
                                alignItems: "center",
                            }} />
                            <View style={{ flexDirection: "column", paddingTop: 2, paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold", position: 'relative'}}>Learn Vue.js From our Experts</Text>
                                <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2}}>$30</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: '#f4f4f4',
                        width: 150,
                        flexDirection: "column",
                        height: 150,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Node')}
                            style={{
                                height: 220,
                                elevation: 2,
                                backgroundColor: "#FFF",
                                marginTop: 20,
                                borderRadius: 10,
                                width: 150
                            }}>
                            <Image source={require('../images/nodejs.png')} style={{
                                height: 150,
                                width: 150,
                                resizeMode: 'cover',
                                resizeMode: 'contain',
                                alignItems: "center",
                            }} />
                            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>Node.js - Online classes</Text>
                                <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2}}>$11</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: '#f4f4f4',
                        marginRight: 10,
                        marginLeft: 10,
                        width: 150,
                        flexDirection: "column",
                        height: 150,
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Docker')}
                            style={{
                                height: 220,
                                elevation: 2,
                                backgroundColor: "#FFF",
                                marginTop: 20,
                                borderRadius: 10,
                                width: 150
                            }}>
                            <Image source={require('../images/dockerr.png')} style={{
                                height: 150,
                                width: 150,
                                resizeMode: 'cover',
                                resizeMode: 'contain',
                                alignItems: "center",
                            }} />
                            <View style={{ flexDirection: "column", paddingTop: 10, paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: "bold" }}>Learn Docker in 24 Hours</Text>
                                <Text style={{ fontWeight: "bold", color: "#00a46c", marginTop: 2}}>$7</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        </ScrollView>
    )
}

export default Home;