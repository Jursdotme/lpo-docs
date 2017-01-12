---
layout: page
title: Woocommerce Ordre
permalink: /docs/woocommerce/ordre/
---

* TOC
{:toc}

---
layout: page
title: Woocommerce Ordre
permalink: /docs/woocommerce/ordre/
---

## **1.** Ordre mail

Normalvis vil du modtage en e-mail, når der gennemføres en ny ordre i systemet. Her finder du de mest nødvendige data ved at klikke på ”Ordre nr.”, der fører direkte videre til den pågældende ordre i webshop-administrationen (kræver login).

![]({{ site.baseurl }}/assets/ordre-mail.png)

_Det anbefales dog, at man tjekker sin webshop-administration med jævne mellemrum for at sikre sig, at der ikke ligger afventende ordrer, hvor ordremailen er endt i spam/junk-mappen._

## **2.** Administration

Tilgå webshop-administrationen via [`http://www.ditdomænenavn.dk/wp-admin/`](http://www.ditdomænenavn.dk/wp-admin/) (kræver login).

![]({{ site.baseurl }}/assets/ordre-wp-admin.png)

Tilgå dine ordrer via menupunktet `WooCommerce` &rarr; `Ordrer`, klik på `ordre nr.` for den ordre, du ønsker at tilgå.

![]({{ site.baseurl }}/assets/ordre-nav.png)


## **3.** Tjek ordre data i webshop-administration

Gennemtjek den valgte ordre. Tjek at kunden har udfyldt adresserne korrekt, at beløbet stemmer overens, og at varen er på lager.

![]({{ site.baseurl }}/assets/ordre-check-wp.png)

## **4.** Tjek ordre data i betalings-gateway

Tilgå din betalings-gateway via.[`https://betaling.curanet.dk/`](https://betaling.curanet.dk/) (kræver login).

![]({{ site.baseurl }}/assets/ordre-pg.png)

Tjek at ordre nr. og beløb stemmer overens med det, der figurerer i webshop-administrationen.

![]({{ site.baseurl }}/assets/ordre-check-pg.png)

## **5.** Levering

Nu kan du med rette pakke og sende din varer afsted til kunden.

## **6.** Gennemfør ordre i betalings-gateway

Tilgå din betalings-gateway som i [pkt. 4](#section_4)

![]({{ site.baseurl }}/assets/ordre-pg.png)

Tryk på det grønne flueben udfor det pågældende ordre nr. Pengene vil nu blive hævet på kundens kreditkort og vil blive overført i løbet af få bankdage.
![]({{ site.baseurl }}/assets/ordre-check-pg.png)

## **7.** Gennemfør ordre i webshop-administration

Vælg din ordre som i [pkt. 3](#section_3), vælg `Ordrestatus` &rarr; `Gennemført`, og tryk på gem ordre.

Kunden vil nu modtage en e-mail, der informerer om ordrens gennemførsel.

![]({{ site.baseurl }}/assets/ordre-data.png)
