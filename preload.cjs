const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ResumeForgeNative', {
  ai: async (payload) => {
    try {
      return await ipcRenderer.invoke('mushak-ai', payload || {});
    } catch (error) {
      return { ok: false, code: 'IPC_ERROR', message: error?.message || 'AI service unavailable.' };
    }
  },
  getAIStatus: async () => {
    try {
      return await ipcRenderer.invoke('mushak-ai-status');
    } catch (error) {
      return { configured: false, model: 'gpt-5.6-luna', error: error?.message || 'Unavailable' };
    }
  }
});
