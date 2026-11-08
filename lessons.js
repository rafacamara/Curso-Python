/* Fases baseadas nos temas de cada capítulo de "Python Para Leigos". Textos e desafios originais.
   Q = múltipla escolha (pergunta, opções, índice certo). C = código (pergunta, saída esperada, código inicial, solução, código oculto executado depois). */
var Q=function(q,o,a){return{q:q,o:o,a:a}};
var C=function(q,out,s,h,add){return{q:q,out:out,s:s||"",h:h,add:add||""}};
var P=[
{c:1,t:"Falando com seu computador",th:"<p>Um <b>programa</b> é uma sequência de instruções precisas. Como o computador não adivinha o que você quer, usamos uma <b>linguagem de programação</b> para se comunicar com ele. O Python é conhecido por ser fácil de ler.</p>",ch:[
Q("O que é um programa?",["Um aparelho eletrônico","Uma sequência de instruções para o computador","Um tipo de internet","Um antivírus"],1),
Q("Por que precisamos de uma linguagem de programação?",["Porque o computador não adivinha o que queremos","Para deixar o PC mais rápido","Para economizar energia","Porque o PC só entende inglês"],0)]},
{c:2,t:"Obtendo sua cópia do Python",th:"<p>Instale o Python (ou uma distribuição como o Anaconda) e confirme perguntando a versão no terminal:</p><pre>python --version</pre>",ch:[
Q("Como confirmar que o Python foi instalado?",["Reiniciando o PC","Rodando python --version no terminal","Abrindo o navegador","Apagando a pasta"],1),
Q("O que é o Anaconda?",["Uma distribuição com Python e ferramentas como o Jupyter","Um editor de fotos","Outra linguagem","Um navegador"],0)]},
{c:3,t:"Interagindo com o Python",th:"<p>Na linha de comando você digita instruções e vê o resultado na hora. Dentro do Python, <code>help()</code> abre a ajuda e <code>exit()</code> encerra a sessão. <code>type()</code> mostra o tipo de um valor.</p>",ch:[
Q("Qual função abre a ajuda do Python?",["ajuda()","help()","manual()","info()"],1),
C("Mostre o tipo do número 5 usando print e type.","<class 'int'>","# print + type\n","print(type(5))")]},
{c:4,t:"Sua primeira aplicação",th:"<p>Comentários começam com <code>#</code> e o Python os ignora: são notas para humanos.</p><pre># saudação\nprint('Oi!')</pre>",ch:[
Q("O que o Python faz com uma linha iniciada por #?",["Executa com prioridade","Ignora","Gera erro","Imprime na tela"],1),
C("Escreva um comentário e imprima: Minha primeira aplicação","Minha primeira aplicação","# escreva um comentário\n","# saudação\nprint('Minha primeira aplicação')")]},
{c:5,t:"Trabalhando com Anaconda",th:"<p>No Jupyter Notebook o código fica em <b>células</b>. Execute uma célula com <code>Shift+Enter</code>. Células de Markdown guardam texto formatado.</p>",ch:[
Q("Atalho para executar uma célula?",["Ctrl+Z","Shift+Enter","Alt+F4","Ctrl+P"],1),
Q("Para que serve uma célula Markdown?",["Rodar Python mais rápido","Escrever texto formatado e anotações","Instalar pacotes","Salvar arquivos"],1)]},
{c:6,t:"Armazenando e modificando informações",th:"<p>Tipos básicos: <code>int</code>, <code>float</code>, <code>str</code> e <code>bool</code>. Datas e horas vêm do módulo <code>datetime</code>.</p><pre>from datetime import date\nprint(date(2026, 1, 15).year)</pre>",ch:[
Q("Qual é o tipo de 3.14?",["int","str","float","bool"],2),
C("Guarde True em ativo e imprima o tipo da variável.","<class 'bool'>","","ativo = True\nprint(type(ativo))"),
C("Imprima o mês da data 4/7/2026 usando date.","7","from datetime import date\n","from datetime import date\nprint(date(2026, 7, 4).month)")]},
{c:7,t:"Gerenciando informações",th:"<p>Operadores atribuem (<code>= +=</code>), modificam (<code>+ - * / // % **</code>) e comparam (<code>== != &lt; &gt;</code>). Funções organizam o código e <code>input()</code> lê o que a pessoa digita.</p>",ch:[
C("Comece com x = 7, some 3 usando += e imprima x.","10","x = 7\n","x = 7\nx += 3\nprint(x)"),
C("Imprima o resto da divisão de 17 por 5.","2","","print(17 % 5)"),
C("Complete a função quadrado(n), que devolve n vezes n.","81","def quadrado(n):\n    ","def quadrado(n):\n    return n * n","\nprint(quadrado(9))")]},
{c:8,t:"Tomando decisões",th:"<p><code>if</code>, <code>elif</code> e <code>else</code> escolhem o que executar. Instruções podem ser aninhadas, sempre com recuo.</p>",ch:[
C("Com nota = 8: se nota >= 7 imprima aprovado, senão reprovado.","aprovado","nota = 8\n","nota = 8\nif nota >= 7:\n    print('aprovado')\nelse:\n    print('reprovado')"),
C("Com n = 0, imprima positivo, negativo ou zero usando elif.","zero","n = 0\n","n = 0\nif n > 0:\n    print('positivo')\nelif n < 0:\n    print('negativo')\nelse:\n    print('zero')"),
Q("Quando o else é executado?",["Quando a condição do if é falsa","Sempre","Nunca","Só dentro de loops"],0)]},
{c:9,t:"Executando tarefas repetitivas",th:"<p><code>for</code> repete um número definido de vezes; <code>while</code> repete até a condição ficar falsa. Um loop pode conter outro.</p>",ch:[
C("Use for e range para imprimir 1, 2 e 3, um por linha.","1\n2\n3","","for i in range(1, 4):\n    print(i)"),
C("Use while para imprimir 3, 2 e 1.","3\n2\n1","n = 3\n","n = 3\nwhile n > 0:\n    print(n)\n    n -= 1"),
C("Com dois for aninhados (i e j de 1 a 2), imprima i * j.","1\n2\n2\n4","","for i in range(1, 3):\n    for j in range(1, 3):\n        print(i * j)")]},
{c:10,t:"Lidando com erros",th:"<p>Erros em execução geram exceções. <code>try</code>/<code>except</code> captura, <code>finally</code> sempre roda e <code>raise</code> sinaliza um erro seu.</p><pre>try:\n    1 / 0\nexcept ZeroDivisionError:\n    print('erro')</pre>",ch:[
C("Tente int('abc'); se der ValueError, imprima inválido.","inválido","","try:\n    int('abc')\nexcept ValueError:\n    print('inválido')"),
C("Dentro de try imprima A; em finally imprima B.","A\nB","","try:\n    print('A')\nfinally:\n    print('B')"),
Q("Qual palavra gera um erro de propósito?",["throw","raise","error","fail"],1)]},
{c:11,t:"Interagindo com pacotes",th:"<p>Pacotes e módulos trazem código pronto. Use <code>import</code> ou <code>from ... import</code>. <code>dir()</code> lista o conteúdo e <code>help()</code> mostra a documentação.</p>",ch:[
C("Importe math e imprima a raiz quadrada de 81.","9.0","","import math\nprint(math.sqrt(81))"),
C("Use from math import pi e imprima pi arredondado com 2 casas.","3.14","","from math import pi\nprint(round(pi, 2))"),
Q("Qual função lista o que um módulo contém?",["dir()","list()","show()","open()"],0)]},
{c:12,t:"Trabalhando com strings",th:"<p>Strings têm métodos como <code>upper()</code>, <code>split()</code> e <code>find()</code>. As f-strings formatam a saída: <code>f'{nome}'</code>. Caracteres especiais usam barra invertida, como <code>\\n</code>.</p>",ch:[
C("Imprima python em maiúsculas.","PYTHON","","print('python'.upper())"),
C("Divida 'a,b,c' pela vírgula e imprima a lista.","['a', 'b', 'c']","","print('a,b,c'.split(','))"),
C("Com nome e idade definidos, imprima: Ana tem 30 anos (f-string).","Ana tem 30 anos","nome = 'Ana'\nidade = 30\n","nome = 'Ana'\nidade = 30\nprint(f'{nome} tem {idade} anos')")]},
{c:13,t:"Gerenciando listas",th:"<p>Listas guardam itens em ordem: <code>append</code>, <code>insert</code>, <code>remove</code>, <code>sort</code>. O <code>Counter</code>, de <code>collections</code>, conta ocorrências.</p>",ch:[
C("Ordene a lista [3, 1, 2] com sort() e imprima.","[1, 2, 3]","nums = [3, 1, 2]\n","nums = [3, 1, 2]\nnums.sort()\nprint(nums)"),
C("Insira 'x' na posição 0 da lista e imprima.","['x', 'a', 'b']","l = ['a', 'b']\n","l = ['a', 'b']\nl.insert(0, 'x')\nprint(l)"),
C("Use Counter para imprimir quantos 'a' há em 'banana'.","3","from collections import Counter\n","from collections import Counter\nprint(Counter('banana')['a'])")]},
{c:14,t:"Coletando vários tipos de dados",th:"<p>Coleções: tuplas (imutáveis), dicionários (chave: valor), pilhas feitas com listas (<code>append</code>/<code>pop</code>) e filas com <code>deque</code>.</p>",ch:[
Q("Qual coleção é imutável?",["Lista","Dicionário","Tupla","Pilha"],2),
C("Crie o dicionário idades com Ana: 30 e imprima idades['Ana'].","30","","idades = {'Ana': 30}\nprint(idades['Ana'])"),
C("Pilha: crie uma lista, faça append(1), append(2) e imprima pop().","2","","p = []\np.append(1)\np.append(2)\nprint(p.pop())"),
C("Fila: com deque, faça append(1), append(2) e imprima popleft().","1","from collections import deque\n","from collections import deque\nd = deque()\nd.append(1)\nd.append(2)\nprint(d.popleft())")]},
{c:15,t:"Criando e usando classes",th:"<p>Uma <b>classe</b> descreve um tipo de objeto: atributos e métodos. <code>__init__</code> prepara o objeto e subclasses herdam e redefinem comportamentos.</p>",ch:[
C("Complete o método latir para imprimir Au!","Au!","class Cachorro:\n    def latir(self):\n        ","class Cachorro:\n    def latir(self):\n        print('Au!')","\nCachorro().latir()"),
C("Use __init__ para guardar o nome em self.nome.","Lia","class Pessoa:\n    def __init__(self, nome):\n        ","class Pessoa:\n    def __init__(self, nome):\n        self.nome = nome","\nprint(Pessoa('Lia').nome)"),
C("Crie a subclasse Gato (herda de Animal) cujo falar imprime Miau.","Miau","class Animal:\n    def falar(self):\n        print('...')\n","class Animal:\n    def falar(self):\n        print('...')\nclass Gato(Animal):\n    def falar(self):\n        print('Miau')","\nGato().falar()")]},
{c:16,t:"Armazenando dados em arquivos",th:"<p>Arquivos guardam dados de forma permanente. <code>with open(nome, modo)</code> abre e fecha com segurança: <code>'r'</code> lê, <code>'w'</code> escreve e <code>'a'</code> acrescenta. (No app, os arquivos ficam num espaço temporário.)</p>",ch:[
Q("Qual modo abre um arquivo apenas para ler?",["'r'","'w'","'a'","'x'"],0),
C("Escreva oi em /tmp/a.txt, leia o arquivo e imprima.","oi","","with open('/tmp/a.txt', 'w') as f:\n    f.write('oi')\nwith open('/tmp/a.txt') as f:\n    print(f.read())"),
C("Acrescente ' mundo' ao arquivo (modo 'a') e imprima o conteúdo.","oi mundo","with open('/tmp/b.txt', 'w') as f:\n    f.write('oi')\n","with open('/tmp/b.txt', 'w') as f:\n    f.write('oi')\nwith open('/tmp/b.txt', 'a') as f:\n    f.write(' mundo')\nwith open('/tmp/b.txt') as f:\n    print(f.read())")]},
{c:17,t:"Enviando um e-mail",th:"<p>Enviar e-mail é montar a mensagem (remetente, destinatário, assunto, corpo) e entregá-la a um servidor <b>SMTP</b>. Sem internet, o app só monta a mensagem.</p>",ch:[
Q("Qual protocolo envia e-mails?",["HTTP","SMTP","FTP","SSH"],1),
C("Defina o assunto 'Oi' na mensagem e imprima msg['Subject'].","Oi","from email.message import EmailMessage\nmsg = EmailMessage()\n","from email.message import EmailMessage\nmsg = EmailMessage()\nmsg['Subject'] = 'Oi'\nprint(msg['Subject'])")]},
{c:"18–21",t:"Recursos, carreiras, ferramentas e bibliotecas",th:"<p>Os capítulos finais mostram o ecossistema: testes e documentação, usos profissionais do Python e bibliotecas para dados, gráficos e criptografia.</p>",ch:[
Q("Qual biblioteca é muito usada para analisar dados em tabelas?",["pandas","turtle","random","json"],0),
Q("Qual biblioteca cria gráficos?",["matplotlib","smtplib","queue","math"],0),
Q("Para que serve testar o código (QA)?",["Encontrar erros antes dos usuários","Deixar o código mais curto","Apagar comentários","Instalar o Python"],0)]}
];
