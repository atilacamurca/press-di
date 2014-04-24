# Introdução

### Introdução

O conceito de Framework agrega além de códigos pré-prontos a utilização de Padrões de Projeto.
Um desses padrões, que nasceu junto com as Frameworks é o Inversão de Controle, que mais
tarde foi refinado por Martin Fowler e ganhou o nome de Injeção de Dependência ou
Dependency Injection (DI).

\bigskip

<http://www.martinfowler.com/articles/injection.html>

# Definição

### Definição

**Dependency Injection** significa dizer que os componentes de uma classe não necessitam procurar
por suas dependências num contexto global ou usando localizadores de serviços. Ao invés disso
suas dependências são simplesmente injetadas na hora da criação e seu **Criador** é o responsável
por provê-las.

---

### Definição

Para isso são necessários três elementos:

* um **componente dependente**,
* uma **declaração das dependências** do componente e
* um **componente injetor** que provê o componente dependente com suas dependências.

# Vantagens

### Vantagens

Uma das razões que levaram a criação desse padrão é a necessidade de testes automatizados.

Usando **DI** você é capaz de criar ambientes para teste e produção devido ao
**baixo acoplamento** proporcionado. Isso porque o padrão conta com um **Criador**
o qual configura o ambiente adequado injetando as depedências necessárias.

# Quem utiliza?

### Quem utiliza?

\begin{figure}
	\includegraphics[scale=0.3]{img/zend2.png}
	\caption{Zend Framework 2 (PHP)}
\end{figure}

---

### Quem utiliza?

\begin{figure}
	\includegraphics[scale=0.4]{img/oss-logo-spring.png}
	\caption{Spring (Java)}
\end{figure}

---

### Quem utiliza?

\begin{figure}
	\includegraphics[scale=0.4]{img/angularjs-logo.png}
	\caption{AngularJS (Javascript)}
\end{figure}

# Exemplo

### Exemplo

Usando AngularJS vamos criar uma espécie de _playlist_ com músicas de vários
albúns no qual nós somos capazes de buscar por qualquer música.

Ver: [github.com/atilacamurca/press-di/tree/master/playlist](https://github.com/atilacamurca/press-di/tree/master/playlist)

---

### Como isso funciona?

\inputjscodefile{src/injector-01.js}

---

### Como isso funciona?

\inputjscodefile{src/injector-02.js}

---

### Como isso funciona?

\inputjscodefile{src/injector-03.js}

---

### Como isso funciona?

\inputjscodefile{src/controller-01.js}

---

### Como isso funciona?

\inputjscodefile{src/controller-02.js}

---

### Como isso funciona?

O método `map` da classe `Array` funciona assim:

\inputjscodefile{src/ex-array-map.js}

---

### Links

* <http://framework.zend.com/manual/2.0/en/modules/zend.di.introduction.html>
* <http://javafree.uol.com.br/artigo/871453/>
* <http://pt.wikipedia.org/wiki/Inje%C3%A7%C3%A3o_de_depend%C3%AAncia>
* <https://docs.angularjs.org/guide/di>
* <http://martinfowler.com/articles/injection.html>
* <http://googletesting.blogspot.com.br/2008/10/dependency-injection-myth-reference.html>
* <http://misko.hevery.com/2008/09/10/where-have-all-the-new-operators-gone/>
* <http://ionicframework.com/blog/angular-mobile-dev/>
* <https://github.com/btford/briantford.com/blob/master/jade/blog/understanding-di.md>
