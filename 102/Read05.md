### All About CSS

#### Q1) What is the purpose of CSS?

The purpose of CSS is to specifying how documents are presented to users — how they are styled, laid out, etc

#### Q2) What are the three ways to insert CSS into your project?

The three ways to insert CSS into your projects are:

-Internal CSS

Internal styles are defined within the **style** element, inside the **head** section of an HTML page

-External CSS

External styles are defined within the **link** element, inside the **head** section of an HTML page

-Inline CSS

Inline styles are defined within the **style** attribute of the relevant element. An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.

External is typically best practice, as it is easiest to read and debug. If the CSS, HTML, and JS are all in one file, it can be difficult to determine the source of the errors.


#### Q3) Write an example of a CSS rule that would give all <p> elements red text.

There are 2 CSS rules that would give all <p> elements red text: class or id. 

.class

#id

There can be as many classes per CSS file as you want, but there can only be one id per file.