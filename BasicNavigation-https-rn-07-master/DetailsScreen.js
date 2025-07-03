import { View, Text, Button } from 'react-native';

function DetailsScreen({ navigation }) {
return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
            <Button
                title="Ir para movies"
                onPress={() => navigation.navigate("Movies")}
            ></Button>
    </View> 
);
}

export default DetailsScreen;