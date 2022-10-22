# GrafanaK6
  
 - Repositorio destinado a estudos sobre teste de performance - 

## Teste de Performance

- Teste de performance são testes cujo os objetivos estão relacionados a avaliação das caracteristica da estrutura de uma aplicação, por exemplo: velocidade, escalabilidade, estabilidade e capacidade de reposta, a fim de coletar dados que ajudem a entender o comportamento do software em determinadas situções, encontrar possiveis gargalos com mais presição, agregar na tomada de decições e consequentimente gerar mais confiaça no software que esta sendo testado. **É UMA TÉCNICA DE TESTE NÃO FUNCIONAL** que busca entender se a arquitetura/estrutura que está sendo desponibilizada vai suprir com qualidade as demandas projetadas. Existem alguns tipos de teste de carga, sendo eles: **SMOKE TESTE, TESTE DE CARGA, TESTE DE STRESSE, TESTE DE PICO, TESTE DE RESISTÊNCIA**, que simulam deteminadas situaçõs abstraidas do mundo real já imaginadas pela equipe.

##  Tipos de Testes de Performance

#### Smoke Teste: 
-  Teste que consiste em submeter uma carga baixa a plataforma afim de entender seu comportamento com utilização mínima. Acredito que sua maior utilização seja por nós mesmos QA's, é um teste em que se pode observar o comportamento do script que esta sendo escrito e indentificar possíveis problemas.

#### Teste de Carga:
- Teste que consiste em submeter um nível de carga compatível com a quantidade de usuários esperados pela plataforma. Ajudar a entender como o software vai responder ao dia a dia esperado pela equipe. Muito usado para avaliar a estabilidade da plataforma e a confiança.

#### Teste de Stresse:
- Teste que consiste em submeter uma carga crescente a plataforma. Muito utilizado para compreender os limites de interações/usuários que a estrutura do software suporta, também ajuda a entendermos a capacidade de escalabilidade, estabilidade, tempo de retorno após uma possível queda, entre outras características.

#### Teste de Picos: 
- Como o própio nome sugere, submete níveis de carga altas a aplicação em curtos períodos de tempo, simulando horários ou dias em que a ultilização da plataforma vai aumentar sgnificativamente. Comumente utilizado para avaliar a estabilidade, entre outros pontos assim como o teste de Stresse.

#### Teste de Resistência:
- Teste que consiste em submeter uma carga esperada a plataforma porém, por um longo período de tempo, em certas situações até mesmo dias, para analizar o comportamento. Muito utilizado para encontrar algum possível vazamento de memória.
