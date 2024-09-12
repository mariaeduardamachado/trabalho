• Escrever uma função int[] getVetor(int n) que retorna um vetor de n
  posições preenchido de forma aleatória
• Obs.: utilizar a instrução
• Math.round(Math.random() * 1000000) para criar um número aleatório
• Implementar os algoritmos de ordenação

########################################################################################

Etapas: 
• Método Bolha
• Método Bolha 2ª versão
• Ordenação por Inserção
• Ordenação por Seleção

########################################################################################

Ajuste Para Retornar 
• Quantidade de comarações
• Quantidade de trocas
• Tempo de execução

#########################################################################################
]
Metodo Gerador

• INT[ ]  GETVetor(INT I)

########################################################################################

• Para testá-los utilize como parâmetro de o vetor criado de forma aleatória
pela função getVetor
• Identificar a complexidade dos algoritmos implementados (notação
Big O)
• Obter três tipos de vetores para os testes:
• vetorA: vetor com números ordenados
• vetorB: vetor com números ordenados de forma decrescente
• vetorC: vetor com números aleatórios
Elaborar conclusão de acordo com as seguintes questões:
• Qual o método de ordenação estudado mais eficiente?
• O tipo de vetor (ordenado de forma crescente, decrescente e aleatório) influi
na performance dos algoritmos?
• Os gráficos obtidos expressaram a notação Big O definida? Por que?+

######################################################################################

Explicação do codgo

Função getVetor(n):

Gera um vetor de tamanho n preenchido com números aleatórios, conforme solicitado.
Algoritmos de Ordenação:

Cada algoritmo retorna o vetor ordenado, além de contar o número de comparações e trocas realizadas.
Implementamos:
bubbleSort: Método Bolha.
bubbleSortOptimized: Método Bolha 2ª versão, que para de rodar se não houver trocas.
insertionSort: Ordenação por Inserção.
selectionSort: Ordenação por Seleção.
Função generateTestVectors(n):

Gera três vetores:
vetorA: Ordenado de forma crescente.
vetorB: Ordenado de forma decrescente.
vetorC: Preenchido com números aleatórios.
Função measureTime(sortFunction, arr):

Mede o tempo de execução do algoritmo de ordenação utilizando performance.now().
Função testSortingAlgorithms():

Realiza os testes para diferentes tamanhos de vetor (1000, 5000, 10000, etc.) e imprime os resultados de tempo, comparações e trocas para cada algoritmo.
Complexidade dos Algoritmos:
Bubble Sort: O(n²), pois precisa fazer várias comparações e trocas para ordenar.
Bubble Sort 2ª versão: O(n²) no pior caso, mas pode ser mais eficiente em vetores parcialmente ordenados (O(n) no melhor caso).
Insertion Sort: O(n²) no pior caso, mas pode ser O(n) no melhor caso (para vetores ordenados).
Selection Sort: O(n²) para todos os casos, pois sempre realiza comparações e trocas, mesmo que o vetor já esteja ordenado.

