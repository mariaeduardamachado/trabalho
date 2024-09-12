// Função para gerar vetor de n números aleatórios
function getVetor(n) {
  let vetor = [];
  for (let i = 0; i < n; i++) {
      vetor.push(Math.round(Math.random() * 1000000));
  }
  return vetor;
}

// Algoritmos de ordenação

// Método Bolha (Bubble Sort)
function bubbleSort(arr) {
  let comparacoes = 0;
  let trocas = 0;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          comparacoes++;
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              trocas++;
          }
      }
  }
  return { sortedArray: arr, comparacoes, trocas };
}

// Método Bolha 2ª versão (otimizada)
function bubbleSortOptimized(arr) {
  let comparacoes = 0;
  let trocas = 0;
  let n = arr.length;
  let swapped;
  do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
          comparacoes++;
          if (arr[i] > arr[i + 1]) {
              [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
              trocas++;
              swapped = true;
          }
      }
  } while (swapped);
  return { sortedArray: arr, comparacoes, trocas };
}

// Ordenação por Inserção (Insertion Sort)
function insertionSort(arr) {
  let comparacoes = 0;
  let trocas = 0;
  for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      comparacoes++;
      while (j >= 0 && arr[j] > key) {
          comparacoes++;
          arr[j + 1] = arr[j];
          j--;
          trocas++;
      }
      arr[j + 1] = key;
  }
  return { sortedArray: arr, comparacoes, trocas };
}

// Ordenação por Seleção (Selection Sort)
function selectionSort(arr) {
  let comparacoes = 0;
  let trocas = 0;
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
          comparacoes++;
          if (arr[j] < arr[minIndex]) {
              minIndex = j;
          }
      }
      if (minIndex != i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
          trocas++;
      }
  }
  return { sortedArray: arr, comparacoes, trocas };
}

// Função para gerar vetores de teste
function generateTestVectors(n) {
  let vetorA = [...Array(n).keys()]; // Vetor ordenado
  let vetorB = vetorA.slice().reverse(); // Vetor decrescente
  let vetorC = getVetor(n); // Vetor aleatório
  return { vetorA, vetorB, vetorC };
}

// Função para medir tempo de execução
function measureTime(sortFunction, arr) {
  let startTime = process.hrtime(); // Inicia o contador de tempo
  let result = sortFunction(arr.slice()); // Executa o algoritmo de ordenação
  let endTime = process.hrtime(startTime); // Obtém o tempo final
  result.time = endTime[0] * 1000 + endTime[1] / 1000000; // Converte para milissegundos
  return result;
}

// Testar os algoritmos de ordenação com vetores de diferentes tamanhos
function testSortingAlgorithms() {
  const sizes = [1000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000];

  sizes.forEach(size => {
      const { vetorA, vetorB, vetorC } = generateTestVectors(size);

      console.log(`\n----- Testando com ${size} elementos -----`);

      // Vetor Ordenado
      console.log('\n### Vetor Ordenado ###');
      
      console.log('Bubble Sort:');
      let bubbleResultA = measureTime(bubbleSort, vetorA);
      console.log(`Tempo: ${bubbleResultA.time} ms, Comparações: ${bubbleResultA.comparacoes}, Trocas: ${bubbleResultA.trocas}`);
      
      console.log('Bubble Sort 2ª versão (otimizada):');
      let bubbleOptimizedResultA = measureTime(bubbleSortOptimized, vetorA);
      console.log(`Tempo: ${bubbleOptimizedResultA.time} ms, Comparações: ${bubbleOptimizedResultA.comparacoes}, Trocas: ${bubbleOptimizedResultA.trocas}`);
      
      console.log('Insertion Sort:');
      let insertionResultA = measureTime(insertionSort, vetorA);
      console.log(`Tempo: ${insertionResultA.time} ms, Comparações: ${insertionResultA.comparacoes}, Trocas: ${insertionResultA.trocas}`);
      
      console.log('Selection Sort:');
      let selectionResultA = measureTime(selectionSort, vetorA);
      console.log(`Tempo: ${selectionResultA.time} ms, Comparações: ${selectionResultA.comparacoes}, Trocas: ${selectionResultA.trocas}`);
      
      // Vetor Decrescente
      console.log('\n### Vetor Decrescente ###');
      
      console.log('Bubble Sort:');
      let bubbleResultB = measureTime(bubbleSort, vetorB);
      console.log(`Tempo: ${bubbleResultB.time} ms, Comparações: ${bubbleResultB.comparacoes}, Trocas: ${bubbleResultB.trocas}`);
      
      console.log('Bubble Sort 2ª versão (otimizada):');
      let bubbleOptimizedResultB = measureTime(bubbleSortOptimized, vetorB);
      console.log(`Tempo: ${bubbleOptimizedResultB.time} ms, Comparações: ${bubbleOptimizedResultB.comparacoes}, Trocas: ${bubbleOptimizedResultB.trocas}`);
      
      console.log('Insertion Sort:');
      let insertionResultB = measureTime(insertionSort, vetorB);
      console.log(`Tempo: ${insertionResultB.time} ms, Comparações: ${insertionResultB.comparacoes}, Trocas: ${insertionResultB.trocas}`);
      
      console.log('Selection Sort:');
      let selectionResultB = measureTime(selectionSort, vetorB);
      console.log(`Tempo: ${selectionResultB.time} ms, Comparações: ${selectionResultB.comparacoes}, Trocas: ${selectionResultB.trocas}`);

      // Vetor Aleatório
      console.log('\n### Vetor Aleatório ###');
      
      console.log('Bubble Sort:');
      let bubbleResultC = measureTime(bubbleSort, vetorC);
      console.log(`Tempo: ${bubbleResultC.time} ms, Comparações: ${bubbleResultC.comparacoes}, Trocas: ${bubbleResultC.trocas}`);
      
      console.log('Bubble Sort 2ª versão (otimizada):');
      let bubbleOptimizedResultC = measureTime(bubbleSortOptimized, vetorC);
      console.log(`Tempo: ${bubbleOptimizedResultC.time} ms, Comparações: ${bubbleOptimizedResultC.comparacoes}, Trocas: ${bubbleOptimizedResultC.trocas}`);
      
      console.log('Insertion Sort:');
      let insertionResultC = measureTime(insertionSort, vetorC);
      console.log(`Tempo: ${insertionResultC.time} ms, Comparações: ${insertionResultC.comparacoes}, Trocas: ${insertionResultC.trocas}`);
      
      console.log('Selection Sort:');
      let selectionResultC = measureTime(selectionSort, vetorC);
      console.log(`Tempo: ${selectionResultC.time} ms, Comparações: ${selectionResultC.comparacoes}, Trocas: ${selectionResultC.trocas}`);
  });
}

// Executar os testes
testSortingAlgorithms();
