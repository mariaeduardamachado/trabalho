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

      // Bubble Sort
      console.log('Bubble Sort:');
      let bubbleResult = measureTime(bubbleSort, vetorC);
      console.log(`Tempo: ${bubbleResult.time} ms, Comparações: ${bubbleResult.comparacoes}, Trocas: ${bubbleResult.trocas}`);

      // Bubble Sort Optimized
      console.log('Bubble Sort 2ª versão (otimizada):');
      let bubbleOptimizedResult = measureTime(bubbleSortOptimized, vetorC);
      console.log(`Tempo: ${bubbleOptimizedResult.time} ms, Comparações: ${bubbleOptimizedResult.comparacoes}, Trocas: ${bubbleOptimizedResult.trocas}`);

      // Insertion Sort
      console.log('Ordenação por Inserção:');
      let insertionResult = measureTime(insertionSort, vetorC);
      console.log(`Tempo: ${insertionResult.time} ms, Comparações: ${insertionResult.comparacoes}, Trocas: ${insertionResult.trocas}`);

      // Selection Sort
      console.log('Ordenação por Seleção:');
      let selectionResult = measureTime(selectionSort, vetorC);
      console.log(`Tempo: ${selectionResult.time} ms, Comparações: ${selectionResult.comparacoes}, Trocas: ${selectionResult.trocas}`);
  });
}
// Executar os testes
testSortingAlgorithms();
