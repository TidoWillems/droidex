import { exportBackup, getCurrentData, saveCurrentData } from './backup';

export function exportData() {
  const data = getCurrentData();

  if (!data) {
    alert('Keine Daten gefunden.');
    return;
  }

  exportBackup(data);
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

  saveCurrentData(data);

  localStorage.setItem('droidex_v2_backup', JSON.stringify(data));

  window.location.reload();
}
