import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@dark_mode_enabled';

export const saveDarkMode = async (enabled) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(enabled));
  } catch (e) {
    console.error('Erro ao salvar tema:', e);
  }
};

export const loadDarkMode = async () => {
  try {
    const saved = await AsyncStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : false; // padrão: claro
  } catch (e) {
    console.error('Erro ao carregar tema:', e);
    return false;
  }
};
