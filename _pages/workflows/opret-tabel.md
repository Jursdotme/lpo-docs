---
layout: page
title: Tabeller med TablePress
permalink: /docs/workflow/tabeller/
---

* TOC
{:toc}

TablePress giver dig mulighed for nemt at oprette og administrere flotte tabeller. Du kan integrere tabellerne i indlæg, sider eller tekst widgets med en simpel Shortcode. Tabel data kan redigeres i et excel-lignende interface, så ingen kodning er nødvendig. Tabeller kan indeholde alle typer af data, selv formler, vil blive evalueret.

Et ekstra JavaScript bibliotek tilføjer funktioner som sortering, paginering, filtrering og mere for besøgende. Tabeller kan importeres og eksporteres fra / til Excel, CSV, HTML, og JSON-filer.

For at oprette en tabel vælges `Tablepress` i administrator menuen.

![liste over tabeller]({{ site.baseurl }}/assets/table-1.png)

Du vil her se en liste over eksisterende tabeller hvis der allerede findes nogle.

![liste over tabeller]({{ site.baseurl }}/assets/table-4.png)

## Opret ny tabel fra bunden

![liste over tabeller]({{ site.baseurl }}/assets/table-2.png)

For at oprette en ny tabel vælges `New Table` fanen øverst. Du skal her angive et navn til tabellen. Du kan desuden angive en beskrivelse hvis ønsket. Når du har defineret antallet af rækker og kolonner du ønsker klikker du på `Add Table`. Du kan nu udfylde cellerne som ønsket. Når tabellen er klar til udgivelse skal du klikke `Save Changes` øverst på siden.

## Indsæt en tabel på en siden.

Tabeller indsættes via [Shortcodes](/begreber). Du skal bruge shortcoden `[table id=10 /]` hvor `id` henviser til tabellens unikke id nummer som du finder på tabel redigerings siden. På same side kan du også se den komplette shortcode for den enkelte tabel.

![liste over tabeller]({{ site.baseurl }}/assets/table-5.png)

## Importer tabel fra Exel eller lign

![liste over tabeller]({{ site.baseurl }}/assets/table-2.png)

Du kan importere tabeller oprettet i eksempelvis Excel ved at vælge `Import` fanen øverst.

Herefter kan du vælge at uploade din exel fil fra din PC ved at vælge `File Upload` som import source. Vælg det format din fil har (dette vil typisk være XLSX).

Til sidst vælges om du vil importere filen som en ny tabel (Add as new table), overskrive en eksisterende tabel (Replace existing table) eller tilføje rækkerne til en eksisterende tabel (Append rows to existing table).

Klik `Import` for at udføre.

## Rediger eksisterende tabel

Klik på en tabel du ønsker at redigere for at åbne redigerings værkøjerne. Du kan her redigere indholdet i de enkelte celler som ønsket.

I boksen `Table Manipulation` kan du indsætte, slette og redigere antallet af række og kolonner. Eksempeltvis kan du indsætte en ny række nederst ved at vælge et antal og trykke på knappen `Add`.

![liste over tabeller]({{ site.baseurl }}/assets/table-3.gif)

Når tabellen er færdigredigeret skal du trykke på `Save Changes`  øverst på siden.

## Avancerede funktioner

![liste over tabeller]({{ site.baseurl }}/assets/table-6.png)

Table Head Row
 : Viser første række i tabellen som en header.

Table Foot Row
 : Viser sidste række i tabellen som en footer.

Alternating Row Colors
 : Hver anden række får en lys grå baggrundsfarve.

Row Hover Highlighting
 : Highlighter den række som musemarkøren befinder sig over.

Print Table Name
 : Skriv tabellens navn lige over tabellen.

Print Table Description
 : Vis tabellens beskrivelse.

Extra CSS Classes
 : Giv tabellen en ekstra CSS class

### DataTables

DataTables er et bibliotek af funktioner som tilføjer funktioner som sortering, mobilvenlige tabeller, og søgefelter.

Use DataTables
  : Slå alle DataTable funktioner til/fra.

Sorting
  : Giv mulighed for at sortere tabellen baseret på kolonner.

Search/Filtering
  : Giv brugere mulighed for at filtrere eller søge i tabellen.

Pagination
  : Begræns antallet af rækker som vises. Brugeren vil være i stand til at "Bladre" mellem flere sider i tabellen.

Pagination Length Change
  : Lad brugeren vælge antallet af rækker som skal vises når der bruges Pagination.

Info
  : Vis info vedrørende den nuværende tabel eks. antallet af rækker.

Horizontal Scrolling
  : Lav horisontal scroll på tabeller som ellers ville overskride sidens bredde.
