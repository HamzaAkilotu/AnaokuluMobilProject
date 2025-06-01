// API servis dosyası: Duyuru, Etkinlik, Menü, Galeri
import { Platform } from 'react-native';

const BASE_URL = Platform.OS === 'android'
  ? 'http://10.0.2.2:5001/api'
  : 'http://localhost:5001/api';

const TIMEOUT = 10000; // 10 saniye

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = TIMEOUT } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    });
    clearTimeout(id);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Bir hata oluştu');
    }
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// Duyuru API
export const DuyuruAPI = {
  getAll: () => fetchWithTimeout(`${BASE_URL}/Duyuru`),
  get: (id) => fetchWithTimeout(`${BASE_URL}/Duyuru/${id}`),
  create: (data) => fetchWithTimeout(`${BASE_URL}/Duyuru`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetchWithTimeout(`${BASE_URL}/Duyuru/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchWithTimeout(`${BASE_URL}/Duyuru/${id}`, { method: 'DELETE' }),
};

// Etkinlik API
export const EtkinlikAPI = {
  getAll: () => fetchWithTimeout(`${BASE_URL}/Etkinlik`),
  get: (id) => fetchWithTimeout(`${BASE_URL}/Etkinlik/${id}`),
  create: (data) => fetchWithTimeout(`${BASE_URL}/Etkinlik`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetchWithTimeout(`${BASE_URL}/Etkinlik/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchWithTimeout(`${BASE_URL}/Etkinlik/${id}`, { method: 'DELETE' }),
};

// Menü API
export const MenuAPI = {
  getAll: () => fetchWithTimeout(`${BASE_URL}/Menu`),
  get: (id) => fetchWithTimeout(`${BASE_URL}/Menu/${id}`),
  create: (data) => fetchWithTimeout(`${BASE_URL}/Menu`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetchWithTimeout(`${BASE_URL}/Menu/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchWithTimeout(`${BASE_URL}/Menu/${id}`, { method: 'DELETE' }),
  getWeekly: () => fetchWithTimeout(`${BASE_URL}/Menu/HaftalikYemekListesi`),
};

// Galeri API
export const GaleriAPI = {
  getAll: () => fetchWithTimeout(`${BASE_URL}/GaleriApi`),
  get: (id) => fetchWithTimeout(`${BASE_URL}/GaleriApi/${id}`),
  create: (data) => fetchWithTimeout(`${BASE_URL}/GaleriApi`, { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => fetchWithTimeout(`${BASE_URL}/GaleriApi/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id) => fetchWithTimeout(`${BASE_URL}/GaleriApi/${id}`, { method: 'DELETE' }),
};

// İnternet bağlantısı kontrolü (opsiyonel, connectivity_plus benzeri için)
export async function checkInternet() {
  try {
    const response = await fetch('https://www.google.com', { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
} 