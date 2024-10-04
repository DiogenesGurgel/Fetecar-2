        function calcularPegada() {
            // Captura os valores das respostas
            var total_emissao = 0;
            for (var i = 1; i <= 15; i++) {
                total_emissao += parseFloat(document.getElementById('q' + i).value);
            }

            // Conversão de impacto para toneladas de CO2 (média global: 5 toneladas)
            var toneladas_carbono = total_emissao * 0.5;  // Supondo 0.5 toneladas por ponto de impacto.

            // Cálculo de quantos planetas seriam necessários
            var emissao_mundial_per_capita = 5;  // Em média, 5 toneladas per capita.
            var planetas = (toneladas_carbono / emissao_mundial_per_capita).toFixed(2);

            // Exibir o resultado
            document.getElementById('resultado').innerHTML = `
                <h2>Resultado:</h2>
                <p>Sua pegada de carbono anual é de aproximadamente <strong>${toneladas_carbono.toFixed(2)} toneladas de CO₂</strong>.</p>
                <p>Se todos vivessem como você, seriam necessários <strong>${planetas}</strong> planetas Terra para sustentar o estilo de vida atual.</p>
            `;
        }