async function uploadFile() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  document.body.appendChild(fileInput);

  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];

    if (!file) {
      console.error('Nenhum arquivo selecionado.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('URL_DO_SEU_ENDPOINT_DE_UPLOAD', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer upload do arquivo: ' + response.status);
      }

      console.log('Arquivo enviado com sucesso.');
    } catch (error) {
      console.error('Erro ao fazer upload do arquivo:', error);
    }

    document.body.removeChild(fileInput);
  });

  fileInput.click();
}

uploadFile();
