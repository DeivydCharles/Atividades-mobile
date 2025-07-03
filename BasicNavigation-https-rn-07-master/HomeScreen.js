import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
            <Button
                title="Ir para detalhes"
                onPress={() => navigation.navigate("Details")}
            ></Button>
    </View>
);
}

export default HomeScreen;