document.addEventListener('DOMContentLoaded', (event) => {
    generateFields();
});

function generateFields() {
    const container = document.getElementById('dynamicFieldsContainer');
    const numAtendimentos = document.getElementById('numAtendimentos').value;
    container.innerHTML = '';

    for (let i = 0; i < numAtendimentos; i++) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = `Atendimento ${i + 1}`;
        fieldset.appendChild(legend);

        const planoLabel = document.createElement('label');
        planoLabel.htmlFor = `plano${i}`;
        planoLabel.textContent = `Plano de Atendimento ${i + 1}`;

        const planoInput = document.createElement('input');
        planoInput.type = 'text';
        planoInput.name = `plano${i}`;
        planoInput.id = `plano${i}`;
        planoInput.placeholder = `Plano de Atendimento ${i + 1}`;

        const procedimentoLabel = document.createElement('label');
        procedimentoLabel.htmlFor = `procedimentorealizado${i}`;
        procedimentoLabel.textContent = `Procedimento ${i + 1}`;

        const procedimentoInput = document.createElement('input');
        procedimentoInput.type = 'text';
        procedimentoInput.name = `procedimentorealizado${i}`;
        procedimentoInput.id = `procedimentorealizado${i}`;
        procedimentoInput.placeholder = `Procedimento ${i + 1}`;

        const tratamentoImgLabel = document.createElement('label');
        tratamentoImgLabel.htmlFor = `tratamentoimg${i}`;
        tratamentoImgLabel.textContent = `Imagem do Tratamento ${i + 1}`;

        const tratamentoImgInput = document.createElement('input');
        tratamentoImgInput.type = 'file';
        tratamentoImgInput.id = `tratamentoimg${i}`;
        tratamentoImgInput.accept = 'image/*';
        tratamentoImgInput.onchange = (event) => previewImage(event, i);

        const imagePreview = document.createElement('img');
        imagePreview.id = `imagePreview${i}`;
        imagePreview.src = '';
        imagePreview.alt = `Pré-visualização da Imagem ${i + 1}`;
        imagePreview.style.display = 'none';
        imagePreview.className = 'preview-image';

        const dataLabel = document.createElement('label');
        dataLabel.htmlFor = `data${i}`;
        dataLabel.textContent = `Data ${i + 1}`;

        const dataInput = document.createElement('input');
        dataInput.type = 'date';
        dataInput.name = `data${i}`;
        dataInput.id = `data${i}`;
        dataInput.placeholder = `Data ${i + 1}`;

        const pagamentoLabel = document.createElement('label');
        pagamentoLabel.htmlFor = `pagamento${i}`;
        pagamentoLabel.textContent = `Método de Pagamento ${i + 1}`;

        const pagamentoInput = document.createElement('select');
        pagamentoInput.name = `pagamento${i}`;
        pagamentoInput.id = `pagamento${i}`;

        const optionEscolher = document.createElement('option');
        optionEscolher.value = '';
        optionEscolher.text = 'Método de Pagamento';
        optionEscolher.id = 'escolher';

        const optionPix = document.createElement('option');
        optionPix.value = 'pix';
        optionPix.text = 'Pix';
        optionPix.id = 'pix';

        const optionCartao = document.createElement('option');
        optionCartao.value = 'cartao';
        optionCartao.text = 'Cartão';
        optionCartao.id = 'cartao';

        const optionDinheiro = document.createElement('option');
        optionDinheiro.value = 'dinheiro';
        optionDinheiro.text = 'Dinheiro';
        optionDinheiro.id = 'dinheiro';

        const parcelasLabel = document.createElement('label');
        parcelasLabel.htmlFor = `parcelas${i}`;  
        parcelasLabel.textContent = `Parcelas ${i + 1}`;

        const parcelasInput = document.createElement('select');
        parcelasInput.name = `parcelas${i}`;
        parcelasInput.id = `parcelas${i}`;

        for (let j = 1; j <= 10; j++) {
            const option = document.createElement('option');
            option.value = `${j}x`;
            option.text = `${j}x`;
            option.id = `${j}x`;
            parcelasInput.appendChild(option);
        }

        const pagamentostatsLabel = document.createElement('label');
        pagamentostatsLabel.htmlFor = `pagamentostats${i}`;  
        pagamentostatsLabel.textContent = `Status do pagamento ${i + 1}`;

        const pagamentostatsInput = document.createElement('input');
        pagamentostatsInput.type = 'text';
        pagamentostatsInput.name = `pagamentostats${i}`;
        pagamentostatsInput.id = `pagamentostats${i}`;
        pagamentostatsInput.placeholder = `Status do Pagamento ${i + 1}`;

        fieldset.appendChild(planoLabel);
        fieldset.appendChild(planoInput);
        fieldset.appendChild(procedimentoLabel);
        fieldset.appendChild(procedimentoInput);
        fieldset.appendChild(tratamentoImgLabel);
        fieldset.appendChild(tratamentoImgInput);
        fieldset.appendChild(imagePreview);
        fieldset.appendChild(dataLabel);
        fieldset.appendChild(dataInput);
        fieldset.appendChild(pagamentoLabel);
        fieldset.appendChild(pagamentoInput);
        pagamentoInput.appendChild(optionEscolher);
        pagamentoInput.appendChild(optionPix);
        pagamentoInput.appendChild(optionCartao);
        pagamentoInput.appendChild(optionDinheiro);
        fieldset.appendChild(parcelasLabel);
        fieldset.appendChild(parcelasInput);
        fieldset.appendChild(pagamentostatsLabel);
        fieldset.appendChild(pagamentostatsInput);
        container.appendChild(fieldset);
    }
}

function previewImage(event, index) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById(`imagePreview${index}`);
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
}