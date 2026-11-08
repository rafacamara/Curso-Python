/* Fases baseadas nos temas de cada capítulo de "Python Para Leigos". Textos e desafios originais.
   Q = múltipla escolha (pergunta, opções, índice certo). C = código (pergunta, saída esperada, código inicial, solução, código oculto executado depois). */
var Q=function(q,o,a){return{q:q,o:o,a:a}};
var QS=function(q,r,w,p){var o=w.slice();o.splice(p,0,r);return{q:q,o:o,a:p}};
var C=function(q,out,s,h,add){return{q:q,out:out,s:s||"",h:h,add:add||""}};
var P=[
{c:1,t:"Falando com seu computador",tp:[
{t:"Por que falar com o computador",th:"<p>Nada acontece sem troca de informação entre você e a máquina: ler e-mail, escrever um texto ou comprar um presente são formas de comunicação. Cada tarefa usa dados diferentes, então usamos <b>aplicações</b> (apps) diferentes para expressar nossas ideias ao computador. Quando nenhum app atende seus dados ou seu jeito de trabalhar, dá para criar um sob medida.</p>",ch:[
QS("Por que existem aplicações diferentes para tarefas diferentes?","Cada tarefa usa dados e formas de interação diferentes",["O computador esquece as instruções","Aplicações são todas iguais","Só assim o computador liga"],0),
QS("Quando faz sentido criar uma aplicação própria?","Quando nenhum app atende seus dados ou sua necessidade",["Sempre, mesmo que já exista uma igual","Nunca, os apps existentes bastam","Só se você for programador profissional"],2)]},
{t:"Procedimentos do dia a dia",th:"<p>Um <b>procedimento</b> é um conjunto de passos, em ordem, para executar uma tarefa, como fazer uma torrada. Computadores não fazem nada sem um procedimento: você precisa dizer quais passos seguir e em que ordem. Uma aplicação é, no fundo, um procedimento escrito. E todo procedimento deve ser <b>testado</b>: é comum esquecer passos que parecem óbvios.</p>",ch:[
QS("O que é um procedimento?","Uma sequência de passos, em ordem, para realizar uma tarefa",["Um erro do programa","Um tipo de hardware","Uma linguagem de programação"],1),
QS("Uma aplicação é, essencialmente...","um procedimento escrito que diz ao computador o que, quando e como fazer",["um jogo","um arquivo de texto sem função","um tipo de internet"],0),
QS("Por que testar um procedimento com outra pessoa (ou com o computador)?","Porque é fácil esquecer passos que parecem óbvios",["Para deixá-lo mais bonito","Porque testar não é necessário","Para gastar menos memória"],3)]},
{t:"Computadores entendem tudo literalmente",th:"<p>Pessoas compensam as falhas de um procedimento; computadores não. Eles executam as instruções <b>de forma literal</b> e precisa, sempre do mesmo jeito. Se o programa pede um valor igual a 5, um valor 4,9 não serve, mesmo que um humano o achasse bom o bastante. Por isso, ao programar, é preciso ser completo e exato.</p>",ch:[
QS("Se o programa exige um valor igual a 5, o que o computador faz com 4,9?","Considera diferente de 5",["Arredonda para 5 automaticamente","Aceita como bom o suficiente","Pergunta ao usuário"],2),
QS("Qual descrição combina com o modo como computadores executam instruções?","Literal, exato e sempre igual",["Intuitivo e flexível","Criativo e imprevisível","Aproximado, como uma pessoa"],0),
C("O computador compara de forma literal. Imprima o resultado de 4.9 == 5.","False","","print(4.9 == 5)")]},
{t:"Uma linguagem especial",th:"<p>A linguagem humana é ambígua demais para dar ordens exatas. Por isso usamos <b>linguagens de programação</b>: específicas, mas compreensíveis por humanos e por computadores. Por baixo, o computador só trabalha com <b>códigos binários</b> (números); um programa especial traduz o que você escreve.</p>",ch:[
QS("Por que não escrevemos programas em português ou inglês comuns?","A linguagem humana é ambígua e o computador entende tudo literalmente",["É proibido","O computador só aceita letras maiúsculas","Seria mais lento para digitar"],1),
QS("Com o que o computador trabalha internamente?","Códigos binários (números)",["Letras e palavras","Imagens","Frases completas"],3),
QS("Qual é a função de uma linguagem de programação?","Permitir procedimentos precisos que humanos e computador compreendem",["Substituir o sistema operacional","Aumentar a velocidade do processador","Guardar arquivos"],0)]},
{t:"Aplicações como ponte e planejamento",th:"<p>Uma boa aplicação faz a comunicação ser tão fácil que ela quase 'desaparece': você foca nos dados, não no app. Antes de criar uma, saiba <b>por que</b> a cria, <b>que necessidade</b> atende e <b>para quem</b>. Observar o que você gosta ou não em outros apps ajuda a decidir como o seu deve ser.</p>",ch:[
QS("Qual é um bom sinal de uma aplicação bem feita?","O usuário foca nos dados, não na aplicação",["Ela tem muitos botões","Ela exige um manual longo","Ela é lenta, mas completa"],1),
QS("O que definir antes de criar uma aplicação?","Por que a cria, qual necessidade atende e para quem",["Só a cor da tela","O nome da empresa","Nada: é melhor improvisar"],2)]},
{t:"Por que o Python é tão legal",th:"<p>O Python foi criado para tornar programadores <b>eficientes e produtivos</b>. Segundo o livro, o código costuma ser de 2 a 10 vezes mais curto que em C/C++ ou Java (menos tempo de desenvolvimento). Também é mais fácil de ler e de aprender, com menos regras estranhas. Não é a linguagem mais popular em todos os rankings, mas é uma ótima escolha para aprender.</p>",ch:[
QS("Qual foi o objetivo principal do Python?","Tornar programadores eficientes e produtivos",["Ser a linguagem mais rápida do mundo","Substituir o código binário","Funcionar só no Windows"],0),
QS("Segundo o livro, o código Python costuma ser, em relação a C/C++ e Java:","De duas a dez vezes mais curto",["Duas vezes mais longo","Idêntico","Dez vezes mais longo"],2),
QS("Qual destas NÃO é uma vantagem citada para o Python?","Exigir muitas regras obscuras",["Leitura mais fácil","Menor tempo de aprendizado","Menor tempo de desenvolvimento"],1)]},
{t:"O que dá para fazer com Python",th:"<p>Usos comuns: criar <b>protótipos</b> rápidos, aplicações para navegador, aplicações <b>matemáticas, científicas e de engenharia</b> (bibliotecas NumPy e SciPy), trabalhar com <b>XML</b> e serviços web, interagir com <b>bancos de dados</b> e criar <b>interfaces gráficas</b> com vários frameworks de GUI.</p>",ch:[
QS("Quais bibliotecas o capítulo cita para matemática e ciência?","NumPy e SciPy",["Word e Excel","jQuery e React","Photoshop e Premiere"],3),
QS("Por que o Python é bom para criar protótipos?","Enfatiza a produtividade, então o esboço sai rápido",["Porque gera imagens sozinho","Porque dispensa o computador","Porque é a única linguagem que permite"],0),
QS("Para que serve o XML, segundo o capítulo?","É a base de muito armazenamento de dados na internet e de serviços web",["Para desenhar interfaces","Para compilar programas","Para criptografar senhas"],1)]},
{t:"Quem usa e como comparar",th:"<p>Grandes organizações, como Google, NASA, YouTube e Industrial Light &amp; Magic, usam Python em pelo menos alguma tarefa, e esse apoio ajuda a linguagem a evoluir. Não existe a melhor linguagem do mundo: existe a mais adequada a cada aplicação. Comparado a C#, Java e Perl, o Python se destaca por ser mais fácil de aprender e mais conciso.</p>",ch:[
QS("Por que o apoio de grandes empresas é bom para uma linguagem?","Elas investem para melhorá-la",["Elas a tornam paga","Elas impedem outros de usá-la","Não faz diferença nenhuma"],2),
QS("Qual ideia o capítulo defende sobre linguagens?","Não existe a melhor linguagem, e sim a mais adequada a cada aplicação",["Python é melhor em tudo","Java é a única válida","Só C serve para conseguir emprego"],1),
QS("O que o capítulo diz sobre Python em relação a Java, C# e Perl?","O Python é mais fácil de aprender",["O Python é mais difícil de aprender","O Python não pode ser usado em empresas","O Python nunca tem código curto"],0)]}
]},
{c:2,t:"Obtendo sua própria cópia do Python",tp:[
{t:"Baixando a versão de que você precisa",th:"<p>Cada <b>plataforma</b> (combinação de hardware e sistema operacional) tem regras próprias. O Python esconde esses detalhes: você escreve o mesmo código e ele o traduz para a plataforma. Mas é preciso baixar a versão feita para a <b>sua</b> plataforma, no site python.org. Para plataformas menos comuns, as versões costumam ser mantidas por voluntários.</p>",ch:[
QS("O que é uma plataforma?","Combinação de hardware e sistema operacional",["Um tipo de linguagem","Um site de downloads","Um editor de texto"],1),
QS("Por que baixar a versão correta para a sua plataforma?","Para o Python conseguir traduzir seu código para ela",["Para o código ficar mais curto","Para o Python ficar gratuito","Para usar o navegador"],0),
QS("Quem costuma manter o Python para plataformas menos comuns?","Voluntários",["A Microsoft","Os fabricantes de celular","Ninguém"],2)]},
{t:"O que vem na instalação",th:"<p>O instalador traz tudo para começar: o <b>interpretador</b> Python, arquivos de ajuda (documentação), acesso à <b>linha de comandos</b>, o <b>IDLE</b> (ambiente de desenvolvimento integrado), o gerenciador de pacotes <b>pip</b> e, quando a plataforma exige, o desinstalador.</p>",ch:[
QS("Qual componente executa seu código Python?","O interpretador",["O pip","O desinstalador","A documentação"],2),
QS("Para que serve o pip?","Gerenciar pacotes",["Editar fotos","Navegar na web","Formatar o disco"],0),
QS("O que é o IDLE?","Um ambiente de desenvolvimento integrado que acompanha o Python",["Um tipo de erro","Um sistema operacional","Uma biblioteca de gráficos"],3)]},
{t:"Instalando no Windows",th:"<p>No Windows, execute o instalador baixado e marque <b>Add Python to PATH</b>, que permite acessar o Python de qualquer pasta. Evite instalar em <i>Program Files</i>: o nome tem espaço (atrapalha o acesso por código) e a pasta costuma exigir direitos de administrador. O livro usa uma pasta simples, como <code>C:\\Python36</code>.</p>",ch:[
QS("O que a opção Add Python to PATH faz?","Permite acessar o Python de qualquer lugar do disco",["Apaga versões antigas","Acelera o computador","Cria um atalho na área de trabalho"],1),
QS("Por que evitar instalar na pasta Program Files?","O nome tem espaço e ela costuma exigir administrador",["Ela não existe no Windows","O Python não cabe nela","É proibido pela licença"],0)]},
{t:"Instalando no Mac e no Linux",th:"<p>O Mac normalmente já traz um Python, mas costuma ser antigo; dá para instalar uma versão mais nova pelo pacote do site oficial. No Linux, distribuições baseadas em RPM (como Fedora e CentOS) geralmente já têm Python. A instalação padrão a partir do código-fonte usa o Terminal (<code>./configure</code>, <code>make</code>, <code>sudo make altinstall</code>); no Ubuntu há também a instalação gráfica pela central de software.</p>",ch:[
QS("Em geral, o que acontece com o Python em um Mac?","Já vem instalado, mas pode ser uma versão antiga",["Não existe Python no Mac","Só funciona com Anaconda","Precisa ser compilado sempre"],2),
QS("Qual comando do Linux monta (compila) o Python antes de instalar?","make",["print","help","quit"],0),
QS("O que é a instalação gráfica no Ubuntu?","Instalar o Python pela central de software, sem digitar comandos",["Instalar pelo navegador","Instalar por pen drive","Instalar por e-mail"],1)]},
{t:"Acessando o Python na sua máquina",th:"<p>Depois de instalar, há três jeitos de abrir o Python: pelo <b>IDLE</b> (ambiente gráfico), pela <b>linha de comando do Python</b> (menu Iniciar, ou Terminal no Mac) ou digitando <code>python</code> num prompt de comando. O último exige o Python no PATH e permite usar <b>opções de linha de comando</b> (veja-as com <code>python /?</code>). No Linux, pode ser preciso digitar o número da versão, como <code>python3.6</code>.</p>",ch:[
QS("Qual opção abre o ambiente gráfico do Python?","IDLE",["Terminal","pip","make"],3),
QS("Para digitar python em qualquer prompt, o que precisa estar configurado?","O PATH incluindo o Python",["Um antivírus","Conexão com a internet","Uma conta no GitHub"],0),
QS("Para que servem as opções de linha de comando?","Alterar como o Python funciona ao ser iniciado",["Apagar arquivos","Atualizar o Windows","Escrever e-mails"],1)]},
{t:"Testando sua instalação",th:"<p>O teste clássico: no IDLE, digite <code>print('...')</code> e o Python mostra o texto. Ele também aceita contas direto: <code>3 + 4</code> responde <code>7</code>. O IDLE colore o código: roxo para comandos, verde para o conteúdo enviado ao comando, azul para a saída e preto para entradas que não são comandos. Para encerrar a sessão, use <code>quit()</code>. Todo comando tem parênteses, mesmo vazios.</p>",ch:[
QS("O que o comando print() faz?","Mostra na tela o que você pedir",["Imprime em papel","Apaga a tela","Fecha o IDLE"],2),
QS("No IDLE, a saída de um comando aparece em qual cor?","Azul",["Roxo","Verde","Preto"],0),
QS("Como reconhecer que quit é um comando?","Ele tem parênteses, como print()",["Ele começa com maiúscula","Ele vem entre aspas","Ele nunca aparece colorido"],1),
C("Faça o teste da instalação: imprima This is my first Python program.","This is my first Python program.","","print('This is my first Python program.')"),
C("Peça ao Python para calcular 3 + 4 e mostre o resultado.","7","","print(3 + 4)")]}
]},
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
