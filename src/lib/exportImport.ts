import { exportBackup } from './backup';

const STORAGE_KEY = 'droidex_v2';

export function exportData() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    alert('Keine Daten gefunden.');
    return;
  }

  exportBackup(JSON.parse(raw));
}

export async function importData(file: File) {
  const text = await file.text();

  const data = JSON.parse(text);

  if (
    !Array.isArray(data.collected) ||
    !Array.isArray(data.present) ||
    !Array.isArray(data.flawless)
  ) {
    throw new Error('Ungültige Droidex-Datei');
  }

  if (!confirm('Vorhandene Droidex-Daten überschreiben?')) {
    return;
  }

  localStorage.setItem('droidex_v2', JSON.stringify(data));
  localStorage.setItem('droidex_v2_backup', JSON.stringify(data));

  window.location.reload();
}
