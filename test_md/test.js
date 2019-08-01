const {markdown2ast,ast2markdown,i18nReplace,i18nTranslate} = require('../src/translate/index');

const en = `
![](https://cdn-images-1.medium.com/max/16000/1*X68DND6Lh8GFvM3i49KOhA.png)

# 7 Rules for Creating Gorgeous UI (Updated for 2019)
> # A non-artsy guide to creating beautiful apps and sites

## Introduction

OK, first things first. This guide is not for everyone. Who is this guide for?

* **Developers **who want to be able to design their own good-looking UI in a pinch.

* **UX designers **who want their portfolio to look better than a Pentagon PowerPoint. Or UX designers who know they can sell an awesome UX better in a pretty UI package.

If you went to art school or consider yourself a UI designer already, you will likely find this guide some combination of a.) boring, b.) wrong, and c.) irritating. That’s fine. All your criticisms are right. Close the tab, move along.

Let me tell you what you’ll find in this guide.

First, I was a UX designer with no UI skills. I *love* designing UX, but I wasn’t doing it for long before I realized there were a bunch of good reasons to learn how to make an interface look nice:

* My portfolio looked like crap, reflecting poorly on my work and thought process

* My UX consulting clients would rather buy someone’s skills if their expertise extended to more than just *sketching boxes and arrows*

* Did I want to work for an early-stage startup at some point? Best to be a sweeper

I had my excuses. *I don’t know crap about aesthetics. I majored in engineering – it’s almost a badge of pride to build something that looks awful.*
> # *“I majored in engineering — it’s almost a badge of
> #pride to build something that looks awful.”*

In the end, I learned the aesthetics of apps the same way I’ve learned any creative endeavor: *cold, hard analysis*. And shameless copying of what works. I’ve worked 10 hours on a UI project and billed for 1. The other 9 were the wild flailing of learning. Desperately searching Google and Pinterest and Dribbble for something to copy from.

These “rules” are the lessons from those hours.

**So word to the nerds: if I’m any good at designing UI now, it’s because I’ve *analyzed *stuff — not because I came out the chute with an intuitive understanding of beauty and balance.**

This article is not theory. This article is pure application. You won’t see anything about golden ratios. I don’t even mention color theory. Only what I’ve learned from being bad and then [deliberately practicing](http://calnewport.com/blog/2010/01/06/the-grandmaster-in-the-corner-office-what-the-study-of-chess-experts-teaches-us-about-building-a-remarkable-life/).

Think of it this way: Judo was developed based on centuries of Japanese martial and philosophical traditions. You take judo lessons, and in addition to fighting, you’ll hear a lot about energy and flow and harmony. That sort of stuff.

Krav Maga, on the other hand, was invented by some tough Jews who were fighting Nazis in the streets of 1930s Czechoslovakia. There is no *art* to it. In Krav Maga lessons, you learn how to stab someone’s eye with a pen and book it.

This is the Krav Maga of screens.

### The Rules

Here they are:

 1. **Light comes from the sky**

 2. **Black and white first**

 3. **Double your whitespace**

 4. **Learn the methods of overlaying text on images **(see [Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96#e969))

 5. **Make text pop — and un-pop **(see [Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96#9b87))

 6. **Only use good fonts **(see [Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96#6ce2))

 7. **Steal like an artist **(see [Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96#ff26))

Let’s get to it.

## Rule 1: Light Comes From the Sky

*Shadows are invaluable cues in telling the human brain what user interface elements we’re looking at.*

This is perhaps the **most important non-obvious thing **to learn about UI design: *light comes from the sky. *Light comes from the sky so frequently and consistently that for it to come from below actually looks *freaky.*

![WoooOOOooo](https://cdn-images-1.medium.com/max/2000/1*eFJGYuA67SIzu9pB1MZFKQ.jpeg)

When light comes from the sky, it illuminates the tops of things and casts shadows below them. The tops of stuff are lighter, the bottoms are darker.

You wouldn’t *think *of people’s lower eyelids as being particularly shaded, but shine some light on those suckers and all of a sudden it’s demon girl at your front door.

Well, the same is true for UI. Just as we have little shadows on all the undersides of all our facial features, there are shadows on the undersides of *tons* of UI elements. **Our screens are flat, but we’ve invested a great amount of art into making so many elements on them *appear be 3-D***.

![My favorite part of this image is the poker finger in the lower-right.](https://cdn-images-1.medium.com/max/2000/1*FbusHycLlFPn1Hv1N88fzg.png)

Take buttons. Even with this relatively “flat” button, there are still a handful of light-related details:

 1. The unpushed button (top) has a **darkened bottom edge**. Sun don’t shine there, son.

 2. The unpushed button is **slightly brighter at the top** than at the bottom. This is because it imitates a slightly curved surface. Just as how you’d need to tilt a mirror held in front of you up to see the sun in it, surfaces that are tilted up reflect a *biiiiit* more of the sun’s light towards you.

 3. The unpushed button casts a **subtle shadow **– perhaps easier to see in the magnified section.

 4. The pushed button, while still darker at the bottom than at the top, is **overall darker **– this is because it’s at the plane of the screen and the sun can’t hit it as easily. One could argue that all the pushed buttons we see in real life are darker too, because our hands are blocking the light.

That was just a button, and yet there are these 4 little light effects present. That’s the lesson here. Now we just apply it to *everything.*

![iOS 6 is old news, but it makes a good case study in light behavior.](https://cdn-images-1.medium.com/max/2000/1*4FCAIgmJa8BuildjlnsDeA.png)

Here is a pair of iOS 6 settings — “Do Not Disturb” and “Notifications”. NBD, right? But look how many light effects are going on with them.

* The top lip of the inset control panel casts a small shadow

* The “ON” slider track is also immediately set in a bit

* The “ON” slider track is concave and the bottom reflects more light

* The icons are set *out *a bit. See the bright border around the top of them? This represents a surface perpendicular to the light source, hence receiving a lot of light, hence bouncing a lot of light into your eyes.

* The divider notch is shadowed where angled away from the sun and vice versa

![*A close-up of a divider notch, from an old concept of mine.*](https://cdn-images-1.medium.com/max/2000/1*gWuSN3QN9dSeVwSP2LZVow.png)

Elements that are generally **inset**:

* Text input fields

* Pressed buttons

* Slider tracks

* Radio button (unselected)

* Checkboxes

Elements that are generally **outset**:

* Buttons (unpressed)

* Slider buttons

* Dropdown controls

* Cards

* The *button *part of a selected radio button

* Popups

Now that you know, you’ll notice it everywhere. You’re welcome, kid.

### Wait, what about flat design, Erik?

We’re 5 years into a trend of “flat design”, which is, well, *exactly what it sounds like*. Flat design is a visual style in which the **elements *lack *simulated indentations or protrusions. **They’re just lines and shapes of solid color.

![](https://cdn-images-1.medium.com/max/2000/1*LlZbvia9k5Qc74h9Z55dBQ.png)

I love *clean and simple* as much as the next guy, but I don’t think this is a long-term trend here. The subtle simulation of 3-D in our interfaces seems far too intuitive to give up entirely.

Five years ago, I predicted we’d see a rise of “flatty design”, and, at least of 2019, that’s where we are – elements of flat’s clean appearance, with a dusting of shadows to help us figure out what we’re looking at.

![](https://cdn-images-1.medium.com/max/2040/1*eEdLH0G3UsUbi8MTIE-7ow.png)

We live in a golden age, here in this happy medium between difficult-to-get-right skeuomorphism and usability-challenged flat design. Flatty is still clean, still simple, but you’ll have *some* shadows and cues for what to tap/slide/click.

![OS X Yosemite— flatty, not flat.](https://cdn-images-1.medium.com/max/2000/1*gWvCSNxqNjyYaq4IF31ZhQ.png)

Or, another example of flatty design: Google’s [Material Design language](https://material.io/design/).

![](https://cdn-images-1.medium.com/max/3040/1*FoHxa-1Wjz9OuqOUAdsC8Q.png)

This is the sort of thing I see sticking around.

It uses subtle real-world cues to convey information. **Key word, *subtle**.*

You can’t say it doesn’t imitate the real-world, but it’s also not the web of 2006. There are no textures, no sheens, and the only gradients are purely decorative.

Flatty is the way of the future, I think. Flat? Psh, just a thing of the past.

![That flat design looks so hot right now!](https://cdn-images-1.medium.com/max/2000/1*Zqcjyz-oIqZZojyYyWVl2Q.png)

## Rule 2: Black and White First

*Designing in grayscale before adding color simplifies the most complex element of visual design– and forces you to focus on spacing and laying out elements.*

UX designers are really into designing “mobile-first” these days. That means you think about how pages and interactions work on a phone *before* imagining them on your zillion-pixel Retina monitor.

**That sort of constraint is great. It clarifies thinking**. You start with the harder problem (usable app on a teeny-weeny screen), then adopt the solution to the easier problem (usable app on a large screen).

Well here’s another similar constraint: design *black and white first*. Start with the harder problem of making the app beautiful and usable in every way, but without the aid of color. **Add color last, and even then, only with purpose**.

![[Haraldur Thorleifsson](http://ueno.co/)’s grayscale wireframes look as good as lesser designer’s finished sites.](https://cdn-images-1.medium.com/max/2290/1*qheNNhQhjjwxMeJ5XGocsA.png)

This is a reliable and easy way to keep apps looking “clean” and “simple”. **Having too many colors in too many places is a really easy way to screw up clean/simple**. B&WF forces you to focus on things like spacing, sizes, and layout first. And those are the primary concerns of a clean and simple design.

![](https://cdn-images-1.medium.com/max/2426/1*YxV7C-nHHir-PSbJ4-jqhQ.png)

![](https://cdn-images-1.medium.com/max/2000/1*RckBhZxKQfveClU7rwGuyg.jpeg)

![Classy grayscale.](https://cdn-images-1.medium.com/max/2000/1*EnbssykGOuXeXMV3AQFyjw.png)

There are some cases where B&WF isn’t as useful. Designs that have a strong specific attitude— “sporty”, “flashy”, “cartoony”, etc. — need a designer who can use color extremely well. But **most apps don’t have a specific attitude except *clean and simple***. Those that do are admittedly much harder to design.

![](https://cdn-images-1.medium.com/max/2000/1*OraO1vxtkxYteZyE4CXrOQ.png)

![Flashy and vibrant designs by [Julien Renvoye](https://twitter.com/JulienRenvoye) (left) and [Cosmin Capitanu](https://twitter.com/CosminCapitanu) (right). Harder than it looks.](https://cdn-images-1.medium.com/max/2000/1*JsbQFaIY6g697PMeEuMwvA.png)

For all the rest, there’s B&WF.

### Step 2: How to add color

The simplest color to add is one color.

![](https://cdn-images-1.medium.com/max/2426/1*YxV7C-nHHir-PSbJ4-jqhQ.png)

Adding one color to a grayscale site draws the eye simply and effectively.

![](https://cdn-images-1.medium.com/max/2000/1*pds21170RP-6ZIkuSxgI2Q.png)

You can also take it one step up. Grayscale + *two* colors, or grayscale + multiple colors of a single hue.
>  **Color codes in practice — i.e. wait, what’s a hue?**
>  The web by and large talks about color as RGB hex codes. It’s most useful to ignore those. RGB is not a good framework for coloring designs. Much more useful is [HSB](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html) (which is synonymous with HSV, and similar to HSL).
>  HSB is better than RGB because it fits with the way we think about color naturally, and you can predict how changes to the HSB values will affect the color you’re looking at.
>  If this is news to you, here’s [a good primer on HSB colors](https://learnui.design/blog/the-hsb-color-system-practicioners-primer.html).

![Single-hue gold theme from [Smashing Magazine](http://www.smashingmagazine.com/2010/02/08/color-theory-for-designer-part-3-creating-your-own-color-palettes/).](https://cdn-images-1.medium.com/max/2000/1*tZRxO2DReDduBqOwgqd_yw.jpeg)

![Single-hue blue theme from [Smashing Magazine](http://www.smashingmagazine.com/2010/02/08/color-theory-for-designer-part-3-creating-your-own-color-palettes/).](https://cdn-images-1.medium.com/max/2000/1*-rbrbh20EHL_Ue_IDxl_0A.jpeg)

By modifying the **saturation** and **brightness** of a single hue, you can generate multiple colors— darks, lights, backgrounds, accents, eye-catchers— but it’s not overwhelming on the eye.

Using multiple colors from one or two base hues is the **most reliable way to accentuate and neutralize elements without making the design messy**.

![Countdown timer by [Kerem Suer](http://kerem.co/)](https://cdn-images-1.medium.com/max/2000/1*_fM8VVYx7hMgdJ_Wy24AXg.png)

In my experience, adjusting your theme color to fit the use-cases your UI calls for is the *most important skill *in using color, and I’ve written a practical guide to it [here](https://learnui.design/blog/color-in-ui-design-a-practical-framework.html).

### A few other notes on color

Color is the most complicated area of visual design. And while a lot of stuff on color is obtuse and not practical for finishing the design in front of you, I’ve seen some really good stuff out there.

A small toolbox:

* [**Learn UI Design](http://learnui.design/?utm_source=medium&utm_medium=content&utm_campaign=7-rules-part-1)**. Shameless plug: this is a course I’ve created, and it contains 3 *hours* of video about designing with color (and over 20 hours of total videos on UI design topics). Check it out at [*learnui.design](http://learnui.design/?utm_source=medium&utm_medium=content&utm_campaign=7-rules-part-1)*.

* [**Color in UI Design: A (Practical) Framework](https://learnui.design/blog/color-in-ui-design-a-practical-framework.html)**. If you liked this section, but want to hear more about *color* (as opposed to just black and white), this is your article. And guess who wrote it!

* [**Never Use Black](http://ianstormtaylor.com/design-tip-never-use-black/)** (Ian Storm Taylor). Talks about how totally flat grays almost never appear in the real-world, and how saturating your shades of gray– especially your darker shades– adds a visual richness to your designs. Plus, saturated grays more closely mimic the real-world, which is its own virtue.

* [**Accessible Color Generator](https://learnui.design/tools/accessible-color-generator.html)**. A handy tool for taking one color (your theme color, logo color, etc) and turning it into a whole, accessible color palette.

* [**Dribbble search-by-color](https://dribbble.com/colors/BADA55).** Another awesome way to find what works with a particular color. Talk about practical. If you already have one color decided, come look at what the world’s best designers are doing/matching with that color.

## Rule 3: Double your whitespace

*To make UI that looks designed, add a lot of breathing room.*

In Rule 2, I said that B&WF forces designers to think about *spacing and layout* before considering color, and how that’s a good thing. Well, it’s time we talk about spacing and layout.

If you’ve coded HTML from scratch, you’re probably familiar with the way HTML is, by default, laid out on the page.

![](https://cdn-images-1.medium.com/max/2000/1*fS6ixQIk88MJlEmph7PeJA.png)

Basically, everything is smashed towards the top of the screen. The fonts are small; there’s absolutely no space between lines. There’s a *biiit* of space between paragraphs, but it isn’t much. The paragraphs just stretch on to the end of the page, whether that’s 100 px or 10,000 px.

Aesthetically speaking, that’s *awful*. **If you want to make UI that looks *designed*, you need to add in a lot of breathing room**.

Sometimes a ridiculous amount.
>  **Whitespace, HTML, and CSS**
>  If you, like me, are used to formatting with CSS, where the **default is no whitespace**, it’s time to untrain yourself of those bad habits. Start thinking of whitespace as the default— everything starts as whitespace, until you take it away by adding a page element.
>  Sound zen? I think it’s a big reason people still sketch this stuff out on paper.
>  **Starting with a blank page means starting with nothing but whitespace**. You think of margins and spacing right from the very beginning. Everything you draw is a conscious whitespace-removing decision.
>  **Starting with a bunch of unstyled HTML means starting with content**. Spacing is the afterthought. It has to be explicitly stated.

Here’s an illustrative music player concept by [Piotr Kwiatkowski](http://www.piotrkwiatkowski.co.uk/).

![](https://cdn-images-1.medium.com/max/3200/1*qFwXZ_05pRv2OtiaJHIp6Q.jpeg)

Pay particular attention to the menu on the left.

![Left menu](https://cdn-images-1.medium.com/max/2000/1*jSC64LYfVYlMHaI_B7xfKQ.png)

The vertical space between the menu items is fully *twice*** **the height of the text itself. You’re looking at 12px font with just as much padding above and below it.

Or take a look at the list titles. **There’s a 15px space between the word “PLAYLISTS” and its own underline. That’s more than the [cap height](http://en.wikipedia.org/wiki/Cap_height) of the font itself!** And that’s to say nothing of the 25 pixels between the lists.

![*More space in the top nav bar. The text “Search all music” is 20% of the height of the bar. The icons are similarly proportioned.*](https://cdn-images-1.medium.com/max/2000/1*43qoikq5esyOer2PpETX_Q.png)

The left sidebar shows generous spacing in between lines of text, and more.

Piotr was conscientious about putting in extra space here, and it paid off. While this is just a concept he put together for the fun of it (as far as I know), as far as aesthetics go, it’s beautiful enough to compete with the best music UIs out there.

Good, generous whitespace can make some of the messiest interfaces look inviting and simple— like forums.

![Forum design concept by [Matt Sisto](http://sis.to/)](https://cdn-images-1.medium.com/max/2000/1*g6m0YZVyMEVMuLXzO512gg.png)

Or Wikipedia.

![Wikipedia design concept by [Aurélien Salomon](https://dribbble.com/aureliensalomon)](https://cdn-images-1.medium.com/max/2000/1*SVtl39B-dSsHo3HFI0h4FA.png)

You can find plenty of argument that, say, the Wikipedia redesign leaves out key functionality to using the site. But you can’t say it’s not a good way to learn!

Put space between your lines.

Put space between your elements.

Put space between your groups of elements.

**Analyze what works**.

*OK, that wraps up Part 1. Thanks for sticking around!*

In [Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96), I’ll be talking about the last 4 rules:
>  **4. Learn the methods of overlaying text on images**
>  **5. Make text pop— and un-pop**
>  **6. Only use good fonts**
>  **7. Steal like an artist**

If you learned something useful in Part 1, [read Part 2](https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-2-430de537ba96).

## Still can’t get enough? Introducing… Learn UI Design

I’ve been plugging away to create the **single most comprehensive **online video course for learning the **practical skills of interface design**.

![](https://cdn-images-1.medium.com/max/2000/1*ih8R489EfuZb58WMR2x8Zg.png)

Learn UI Design covers all kinds of topics:

* **Color**. Picking good colors, adjusting them for different purposes in your interface, developing a palette, fixing clashing colors, and more.

* **Typography**. Choosing fonts, styling text, pairing fonts, and more.

* **Fundamentals of design**. Spacing, alignment, grids, layout, lighting, shadows, and more.

* **User interface elements.** Form controls (like buttons and text boxes), icons, imagery (like photography and illustrations), tables and lists (hugely important for mobile app design), and more.

Here’s an idea of how much content there is. The topics you’ve already heard about — lighting, use of gray, and spacing — each have their *own* videos, totaling **1 hr, 52 min**.

There is a *ton* of content in this course: **20+ hours of video** in **40+ video lessons**.

![](https://cdn-images-1.medium.com/max/3104/1*bptkBKJtVrx5-yO0-ePJWQ.png)

In almost every video, you’ll *watch me design in Sketch*. This is important. I’m not teaching some theoretical framework here. Instead, everything I show you is the tips, tricks, and frameworks I use to design interfaces every day. Think of it as watching over my shoulder as I teach you everything I know.

For example, in the “Gray” video (yes: 27 minutes *all about using a single color*), I start by showing you a practical technique to make your grays match your theme colors, no matter what those colors are. Then I do another demo to show off gray’s versatility, explaining ways in which its *subtlety* is actually a *strength*. This includes some tips that took me *years* to notice.

![](https://cdn-images-1.medium.com/max/2000/1*3hmtgx-9aY4YA18fnVYUDA.png)

Finally, I explain why gray is the classiest color, and used by so many luxury and fashion brands. Then I explain the homework for the lesson and wrap up. By the end, we’ve done 3 live demos, explained a few key tricks for how to add gray to your designs, and looked at 10 well-designed real-world examples (including 1 designed by me).

Here’s what folks are saying about Learn UI Design:
>  “Learn UI Design is like learning how to fly a plane by actually sitting in the cockpit with the pilot — Erik is constantly designing/redesigning **real-world examples** right in front of you, explaining why X is good or bad, and how to go about making it even better.”
 — Mudassir Ali, Frontend Engineer, Canva
>  “Learn UI Design’s straightforward approach, illustrated with real-life examples and tutorials, was extremely helpful and eye-opening. I would **highly recommend** this course for UX designers wanting to add UI design to their toolkit.”
 — Sarah Kim, UX Design Lead
>  “Erik’s **pragmatic approach** to design has taught me infinitely more than what reading any design books ever did! Away with the books, and one more video please.”
 — Anders Nysom, Freelance Developer

If you’re a dev, UX designer, or PM, and want to add visual design to your skillset, this course is tailor-made for you. Hop on over to [learnui.design](http://learnui.design/?utm_source=medium&utm_medium=content&utm_campaign=7-rules-part-1) for more.

![](https://cdn-images-1.medium.com/max/2000/1*a-FGKWDARSKKkJRF5Jtd8A.png)

Oh, and finally: I have a **Design Newsletter** to which I intentionally send out *very few* but *very high-value* design articles (like the one above). If you want to see stuff like this every month (or 6) in your inbox (basically all of it unpublished anywhere else), you should take a moment and [sign up](http://learnui.design/newsletter.html?utm_source=medium&utm_medium=content&utm_campaign=7-rules-part-1):

 <iframe src="https://medium.com/media/47085b36741abcb3a0452f7ea203871e" frameborder=0></iframe>
`;

const translateText = [[[[["创建华丽UI的7条规则（2019年更新）"]],null,"en"],[[["一个创造漂亮的应用程序和网站的非艺术指南"]],null,"en"],[[["介绍"]],null,"en"],[[["\u003ci\u003eOK, first things first.\u003c/i\u003e \u003cb\u003e好的，首先要做的事情。\u003c/b\u003e \u003ci\u003eThis guide is not for everyone.\u003c/i\u003e \u003cb\u003e本指南并非适合所有人。\u003c/b\u003e \u003ci\u003eWho is this guide for?\u003c/i\u003e \u003cb\u003e这个指南是谁？\u003c/b\u003e"]],null,"en"],[[["开发商 "]],null,"en"],[[["谁想要能够在紧要关头设计自己漂亮的用户界面。"]],null,"en"],[[["UX设计师 "]],null,"en"],[[["\u003ci\u003ewho want their portfolio to look better than a Pentagon PowerPoint.\u003c/i\u003e \u003cb\u003e谁希望他们的投资组合看起来比五角大楼PowerPoint更好。\u003c/b\u003e \u003ci\u003eOr UX designers who know they can sell an awesome UX better in a pretty UI package.\u003c/i\u003e \u003cb\u003e或者知识产权设计师，他们知道他们可以在漂亮的UI包中更好地销售出色的用户体验。\u003c/b\u003e"]],null,"en"],[[["\u003ci\u003eIf you went to art school or consider yourself a UI designer already, you will likely find this guide some combination of a.) boring, b.) wrong, and c.) irritating.\u003c/i\u003e \u003cb\u003e如果你去艺术学校或者认为自己已经是一名UI设计师了，你可能会发现这本指南的一些组合：a。无聊，b。）错误，c。）刺激性。\u003c/b\u003e \u003ci\u003eThat\u0026#39;s fine.\u003c/i\u003e \u003cb\u003e没关系。\u003c/b\u003e \u003ci\u003eAll your criticisms are right.\u003c/i\u003e \u003cb\u003e你所有的批评都是正确的。\u003c/b\u003e \u003ci\u003eClose the tab, move along.\u003c/i\u003e \u003cb\u003e关闭标签，继续前进。\u003c/b\u003e"]],null,"en"],[[["让我告诉你在本指南中你会发现什么。"]],null,"en"],[[["\u003ci\u003eFirst, I was a UX designer with no UI skills.\u003c/i\u003e \u003cb\u003e首先，我是一名没有UI技能的用户体验设计师。\u003c/b\u003e \u003ci\u003eI\u003c/i\u003e \u003cb\u003e一世\u003c/b\u003e "]],null,"en"],[[["爱"]],null,"en"],[[[" 设计用户体验，但在我意识到有一些很好的理由来学习如何使界面看起来不错之前我没有这么做："]],null,"en"],[[["我的投资组合看起来像废话，反映了我的工作和思考过程"]],null,"en"],[[["如果他们的专业知识扩展到不仅仅是，我的用户体验咨询客户宁愿购买某人的技能 "]],null,"en"],[[["素描框和箭头"]],null,"en"],[[["\u003ci\u003eDid I want to work for an early-stage startup at some point?\u003c/i\u003e \u003cb\u003e我想在某个时候为早期创业公司工作吗？\u003c/b\u003e \u003ci\u003eBest to be a sweeper\u003c/i\u003e \u003cb\u003e最好是清扫工\u003c/b\u003e"]],null,"en"],[[["我有我的借口。 "]],null,"en"],[[["\u003ci\u003eI don\u0026#39;t know crap about aesthetics.\u003c/i\u003e \u003cb\u003e我不知道关于美学的废话。\u003c/b\u003e \u003ci\u003eI majored in engineering – it\u0026#39;s almost a badge of pride to build something that looks awful.\u003c/i\u003e \u003cb\u003e我主修工程学 - 这几乎是构建看起来很糟糕的东西的骄傲徽章。\u003c/b\u003e"]],null,"en"],[[["*“我主修工程学 - 它几乎是一个徽章"]],null,"en"],[[["#pride构建看起来很糟糕的东西。“*"]],null,"en"],[[["最后，我学习了应用程序的美学，就像我学习任何创造性的努力一样： "]],null,"en"],[[["冷酷，难以分析"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eAnd shameless copying of what works.\u003c/i\u003e \u003cb\u003e并且无耻地复制有效的东西。\u003c/b\u003e \u003ci\u003eI\u0026#39;ve worked 10 hours on a UI project and billed for 1. The other 9 were the wild flailing of learning.\u003c/i\u003e \u003cb\u003e我在一个UI项目上工作了10个小时并且为1付费。其他9个是学习的疯狂。\u003c/b\u003e \u003ci\u003eDesperately searching Google and Pinterest and Dribbble for something to copy from.\u003c/i\u003e \u003cb\u003e拼命搜索谷歌，Pinterest和Dribbble，以便从中复制。\u003c/b\u003e"]],null,"en"],[[["这些“规则”是那些时间的教训。"]],null,"en"],[[["所以对书呆子说：如果我现在擅长设计UI，那是因为我 "]],null,"en"],[[["分析 "]],null,"en"],[[["东西 - 不是因为我通过对美丽和平衡的直观理解而走出了滑道。"]],null,"en"],[[["\u003ci\u003eThis article is not theory.\u003c/i\u003e \u003cb\u003e这篇文章不是理论。\u003c/b\u003e \u003ci\u003eThis article is pure application.\u003c/i\u003e \u003cb\u003e本文是纯粹的应用程序。\u003c/b\u003e \u003ci\u003eYou won\u0026#39;t see anything about golden ratios.\u003c/i\u003e \u003cb\u003e你不会看到有关黄金比例的任何信息。\u003c/b\u003e \u003ci\u003eI don\u0026#39;t even mention color theory.\u003c/i\u003e \u003cb\u003e我甚至没有提到色彩理论。\u003c/b\u003e \u003ci\u003eOnly what I\u0026#39;ve learned from being bad and then\u003c/i\u003e \u003cb\u003e只有我从坏的方面学到了什么\u003c/b\u003e "]],null,"en"],[[["刻意练习"]],null,"en"],[[["."]],null,"zh-CN"],[[["\u003ci\u003eThink of it this way: Judo was developed based on centuries of Japanese martial and philosophical traditions.\u003c/i\u003e \u003cb\u003e可以这样想：柔道是基于几个世纪的日本武术和哲学传统而发展起来的。\u003c/b\u003e \u003ci\u003eYou take judo lessons, and in addition to fighting, you\u0026#39;ll hear a lot about energy and flow and harmony.\u003c/i\u003e \u003cb\u003e你参加柔道课程，除了战斗，你还会听到很多关于能量，流动和和谐的知识。\u003c/b\u003e \u003ci\u003eThat sort of stuff.\u003c/i\u003e \u003cb\u003e那种东西。\u003c/b\u003e"]],null,"en"],[[["\u003ci\u003eKrav Maga, on the other hand, was invented by some tough Jews who were fighting Nazis in the streets of 1930s Czechoslovakia.\u003c/i\u003e \u003cb\u003e另一方面，Krav Maga是由一些在20世纪30年代捷克斯洛伐克街头与纳粹作战的强硬犹太人发明的。\u003c/b\u003e \u003ci\u003eThere is no\u003c/i\u003e \u003cb\u003e没有\u003c/b\u003e "]],null,"en"],[[["艺术"]],null,"en"],[[[" \u003ci\u003eto it.\u003c/i\u003e \u003cb\u003e它。\u003c/b\u003e \u003ci\u003eIn Krav Maga lessons, you learn how to stab someone\u0026#39;s eye with a pen and book it.\u003c/i\u003e \u003cb\u003e在Krav Maga课程中，您将学习如何用笔刺伤别人的眼睛并预订。\u003c/b\u003e"]],null,"en"],[[["这是屏幕的Krav Maga。"]],null,"en"],[[["规则"]],null,"en"],[[["他们来了："]],null,"en"],[[["光来自天空"]],null,"en"],[[["黑白第一"]],null,"en"],[[["加倍你的空白"]],null,"en"],[[["了解在图像上叠加文本的方法 "]],null,"en"],[[["（看到 "]],null,"en"],[[["第2部分"]],null,"en"],[[[")"]],null,"zh-CN"],[[["使文本弹出 - 并取消弹出 "]],null,"en"],[[["（看到 "]],null,"en"],[[["第2部分"]],null,"en"],[[[")"]],null,"zh-CN"],[[["只使用好的字体 "]],null,"en"],[[["（看到 "]],null,"en"],[[["第2部分"]],null,"en"],[[[")"]],null,"zh-CN"],[[["像艺术家一样窃取 "]],null,"en"],[[["（看到 "]],null,"en"],[[["第2部分"]],null,"en"],[[[")"]],null,"zh-CN"],[[["我们来吧。"]],null,"en"],[[["规则1：光来自天空"]],null,"en"],[[["阴影是告诉人类大脑我们正在看什么用户界面元素的无价线索。"]],null,"en"],[[["这可能是 "]],null,"en"],[[["最重要的非显而易见的事情 "]],null,"en"],[[["了解UI设计： "]],null,"en"],[[["光来自天空。 "]],null,"en"],[[["光线来自天空如此频繁和始终如一，以至于它从下面来看实际看起来 "]],null,"en"],[[["怪异。"]],null,"en"],[[["\u003ci\u003eWhen light comes from the sky, it illuminates the tops of things and casts shadows below them.\u003c/i\u003e \u003cb\u003e当光线来自天空时，它照亮了物体的顶部并在它们下面投下阴影。\u003c/b\u003e \u003ci\u003eThe tops of stuff are lighter, the bottoms are darker.\u003c/i\u003e \u003cb\u003e东西的顶部较轻，底部较暗。\u003c/b\u003e"]],null,"en"],[[["你不会 "]],null,"en"],[[["认为 "]],null,"en"],[[["人们的下眼睑特别阴影，但是对那些吸盘照亮了一下，突然间它就是你前门的恶魔女孩。"]],null,"en"],[[["\u003ci\u003eWell, the same is true for UI.\u003c/i\u003e \u003cb\u003e嗯，UI也是如此。\u003c/b\u003e \u003ci\u003eJust as we have little shadows on all the undersides of all our facial features, there are shadows on the undersides of\u003c/i\u003e \u003cb\u003e就像我们所有面部特征的所有底面上都有小阴影一样，底部也有阴影\u003c/b\u003e "]],null,"en"],[[["吨"]],null,"en"],[[[" 的UI元素。 "]],null,"en"],[[["我们的屏幕是扁平的，但我们投入了大量的艺术品来制作这么多的元素 "]],null,"en"],[[["看起来是3-D"]],null,"en"],[[["."]],null,"zh-CN"],[[["\u003ci\u003eTake buttons.\u003c/i\u003e \u003cb\u003e拿按钮。\u003c/b\u003e \u003ci\u003eEven with this relatively “flat” button, there are still a handful of light-related details:\u003c/i\u003e \u003cb\u003e即使使用这个相对“平坦”的按钮，仍然有一些与光有关的细节：\u003c/b\u003e"]],null,"en"],[[["未按下的按钮（顶部）有一个 "]],null,"en"],[[["底部边缘变暗"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eSun don\u0026#39;t shine there, son.\u003c/i\u003e \u003cb\u003e儿子，太阳不亮了。\u003c/b\u003e"]],null,"en"],[[["未按下的按钮是 "]],null,"en"],[[["顶部稍微亮一点"]],null,"en"],[[[" \u003ci\u003ethan at the bottom.\u003c/i\u003e \u003cb\u003e比在底部。\u003c/b\u003e \u003ci\u003eThis is because it imitates a slightly curved surface.\u003c/i\u003e \u003cb\u003e这是因为它模仿了略微弯曲的表面。\u003c/b\u003e \u003ci\u003eJust as how you\u0026#39;d need to tilt a mirror held in front of you up to see the sun in it, surfaces that are tilted up reflect a\u003c/i\u003e \u003cb\u003e就像你需要倾斜一个固定在你面前的镜子来看到它的太阳一样，倾斜的表面反映了\u003c/b\u003e "]],null,"en"],[[["biiiiit"]],null,"la"],[[[" 更多的阳光照射着你。"]],null,"en"],[[["未按下的按钮投射了一个 "]],null,"en"],[[["微妙的阴影 "]],null,"en"],[[["- 在放大的部分可能更容易看到。"]],null,"en"],[[["按下的按钮虽然底部比顶部更暗，但是 "]],null,"en"],[[["整体较暗 "]],null,"en"],[[["\u003ci\u003e– this is because it\u0026#39;s at the plane of the screen and the sun can\u0026#39;t hit it as easily.\u003c/i\u003e \u003cb\u003e - 这是因为它位于屏幕的平面上，太阳不能轻易击中它。\u003c/b\u003e \u003ci\u003eOne could argue that all the pushed buttons we see in real life are darker too, because our hands are blocking the light.\u003c/i\u003e \u003cb\u003e有人可能会争辩说，我们在现实生活中看到的所有按钮都是较暗的，因为我们的手挡住了光线。\u003c/b\u003e"]],null,"en"],[[["\u003ci\u003eThat was just a button, and yet there are these 4 little light effects present.\u003c/i\u003e \u003cb\u003e那只是一个按钮，但是这里有4个小灯光效果。\u003c/b\u003e \u003ci\u003eThat\u0026#39;s the lesson here.\u003c/i\u003e \u003cb\u003e这就是我们的教训。\u003c/b\u003e \u003ci\u003eNow we just apply it to\u003c/i\u003e \u003cb\u003e现在我们只是应用它\u003c/b\u003e "]],null,"en"],[[["一切。"]],null,"en"],[[["\u003ci\u003eHere is a pair of iOS 6 settings — “Do Not Disturb” and “Notifications”.\u003c/i\u003e \u003cb\u003e这是一对iOS 6设置 - “请勿打扰”和“通知”。\u003c/b\u003e \u003ci\u003eNBD, right?\u003c/i\u003e \u003cb\u003eNBD，对吗？\u003c/b\u003e \u003ci\u003eBut look how many light effects are going on with them.\u003c/i\u003e \u003cb\u003e但看看它们有多少光效。\u003c/b\u003e"]],null,"en"],[[["嵌入式控制面板的上唇投下一个小阴影"]],null,"en"],[[["“ON”滑块轨道也会立即设置"]],null,"en"],[[["“ON”滑块轨道是凹形的，底部反射更多光线"]],null,"en"],[[["图标已设置 "]],null,"en"],[[["出 "]],null,"en"],[[["\u003ci\u003ea bit.\u003c/i\u003e \u003cb\u003e一点点。\u003c/b\u003e \u003ci\u003eSee the bright border around the top of them?\u003c/i\u003e \u003cb\u003e看到它们顶部周围的明亮边框？\u003c/b\u003e \u003ci\u003eThis represents a surface perpendicular to the light source, hence receiving a lot of light, hence bouncing a lot of light into your eyes.\u003c/i\u003e \u003cb\u003e这代表垂直于光源的表面，因此接收大量光线，从而将大量光线反射到您的眼睛中。\u003c/b\u003e"]],null,"en"],[[["分隔器凹口被遮挡，远离太阳成角度，反之亦然"]],null,"en"],[[["一般的元素 "]],null,"en"],[[["插页"]],null,"en"],[[[":"]],null,"zh-CN"],[[["文本输入字段"]],null,"en"],[[["按下按钮"]],null,"en"],[[["滑块轨道"]],null,"en"],[[["单选按钮（未选中）"]],null,"en"],[[["复选框"]],null,"en"],[[["一般的元素 "]],null,"en"],[[["开始"]],null,"en"],[[[":"]],null,"zh-CN"],[[["按钮（未按下）"]],null,"en"],[[["滑块按钮"]],null,"en"],[[["下拉控件"]],null,"en"],[[["牌"]],null,"en"],[[["该 "]],null,"en"],[[["按键 "]],null,"en"],[[["所选单选按钮的一部分"]],null,"en"],[[["弹出窗口"]],null,"en"],[[["\u003ci\u003eNow that you know, you\u0026#39;ll notice it everywhere.\u003c/i\u003e \u003cb\u003e既然你知道，你会发现它到处都是。\u003c/b\u003e \u003ci\u003eYou\u0026#39;re welcome, kid.\u003c/i\u003e \u003cb\u003e小孩，你很受欢迎。\u003c/b\u003e"]],null,"en"],[[["等等，平面设计怎么样，Erik？"]],null,"en"],[[["我们已经有5年的时间进入“平面设计”的潮流了， "]],null,"en"],[[["究竟是什么感觉"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eFlat design is a visual style in which the\u003c/i\u003e \u003cb\u003e平面设计是一种视觉风格\u003c/b\u003e "]],null,"en"],[[["分子 "]],null,"en"],[[["缺乏 "]],null,"en"],[[["模拟压痕或突起。 "]],null,"en"],[[["它们只是纯色的线条和形状。"]],null,"en"],[[["我爱 "]],null,"en"],[[["干净简单"]],null,"en"],[[[" \u003ci\u003eas much as the next guy, but I don\u0026#39;t think this is a long-term trend here.\u003c/i\u003e \u003cb\u003e和下一个人一样多，但我不认为这是一个长期的趋势。\u003c/b\u003e \u003ci\u003eThe subtle simulation of 3-D in our interfaces seems far too intuitive to give up entirely.\u003c/i\u003e \u003cb\u003e在我们的界面中对3-D的微妙模拟似乎太过直观而不能完全放弃。\u003c/b\u003e"]],null,"en"],[[["五年前，我预测我们会看到“扁平设计”的兴起，至少在2019年，这就是我们所处的位置 - 平面外观的元素，阴影的尘埃，帮助我们弄清楚我们是什么看着。"]],null,"en"],[[["\u003ci\u003eWe live in a golden age, here in this happy medium between difficult-to-get-right skeuomorphism and usability-challenged flat design.\u003c/i\u003e \u003cb\u003e我们生活在一个黄金时代，在这个令人愉快的媒介中，在难以获得的正确的特征和可用性挑战的平面设计之间。\u003c/b\u003e \u003ci\u003eFlatty is still clean, still simple, but you\u0026#39;ll have\u003c/i\u003e \u003cb\u003eFlatty仍然干净，仍然很简单，但你会有\u003c/b\u003e "]],null,"en"],[[["一些"]],null,"en"],[[[" 点击/滑动/点击的阴影和提示。"]],null,"en"],[[["或者，另一个扁平设计的例子：谷歌 "]],null,"en"],[[["材料设计语言"]],null,"en"],[[["."]],null,"zh-CN"],[[["这是我看到的那种东西。"]],null,"en"],[[["它使用微妙的现实世界提示来传达信息。 "]],null,"en"],[[["关键词，*微妙"]],null,"en"],[[[".*"]],null,"zh-CN"],[[["你不能说它不模仿现实世界，但它也不是2006年的网络。没有纹理，没有光泽，唯一的渐变是纯粹的装饰。"]],null,"en"],[[["\u003ci\u003eFlatty is the way of the future, I think.\u003c/i\u003e \u003cb\u003e我想，Flatty是未来的发展方向。\u003c/b\u003e \u003ci\u003eFlat?\u003c/i\u003e \u003cb\u003e平面？\u003c/b\u003e \u003ci\u003ePsh, just a thing of the past.\u003c/i\u003e \u003cb\u003ePsh，只是过去的事情。\u003c/b\u003e"]],null,"en"],[[["规则2：黑白优先"]],null,"en"],[[["在添加颜色之前进行灰度设计简化了视觉设计中最复杂的元素，并迫使您专注于间距和布局元素。"]],null,"en"],[[["\u003ci\u003eUX designers are really into designing “mobile-first” these days.\u003c/i\u003e \u003cb\u003eUX设计师现在正在设计“移动优先”。\u003c/b\u003e \u003ci\u003eThat means you think about how pages and interactions work on a phone\u003c/i\u003e \u003cb\u003e这意味着您要考虑页面和交互如何在手机上运行\u003c/b\u003e "]],null,"en"],[[["之前"]],null,"en"],[[[" 想象它们在您的zillion-pixel Retina显示器上。"]],null,"en"],[[["\u003ci\u003eThat sort of constraint is great.\u003c/i\u003e \u003cb\u003e这种约束很棒。\u003c/b\u003e \u003ci\u003eIt clarifies thinking\u003c/i\u003e \u003cb\u003e它澄清了思考\u003c/b\u003e"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eYou start with the harder problem (usable app on a teeny-weeny screen), then adopt the solution to the easier problem (usable app on a large screen).\u003c/i\u003e \u003cb\u003e你从更难的问题开始（在一个微小的屏幕上可用的应用程序），然后采用解决方案来解决更容易的问题（在大屏幕上可用的应用程序）。\u003c/b\u003e"]],null,"en"],[[["那么这是另一个类似的约束：设计 "]],null,"en"],[[["首先是黑白色"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eStart with the harder problem of making the app beautiful and usable in every way, but without the aid of color.\u003c/i\u003e \u003cb\u003e从困难的问题开始，使应用程序美观，可用于各种方式，但没有颜色的帮助。\u003c/b\u003e "]],null,"en"],[[["最后添加颜色，即使这样，只有目的"]],null,"en"],[[["."]],null,"zh-CN"],[[["这是让应用程序看起来“干净”和“简单”的可靠而简单的方法。 "]],null,"en"],[[["在太多的地方有太多的颜色是一个非常简单的方法搞砸干净/简单"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eB\u0026amp;WF forces you to focus on things like spacing, sizes, and layout first.\u003c/i\u003e \u003cb\u003eB＆WF迫使您首先关注间距，尺寸和布局等内容。\u003c/b\u003e \u003ci\u003eAnd those are the primary concerns of a clean and simple design.\u003c/i\u003e \u003cb\u003e这些是清洁简单设计的主要问题。\u003c/b\u003e"]],null,"en"],[[["\u003ci\u003eThere are some cases where B\u0026amp;WF isn\u0026#39;t as useful.\u003c/i\u003e \u003cb\u003e在某些情况下，B＆WF不那么有用。\u003c/b\u003e \u003ci\u003eDesigns that have a strong specific attitude— “sporty”, “flashy”, “cartoony”, etc. — need a designer who can use color extremely well.\u003c/i\u003e \u003cb\u003e具有强烈特定态度的设计 - “运动型”，“华丽”，“卡通”等 - 需要能够非常好地使用颜色的设计师。\u003c/b\u003e \u003ci\u003eBut\u003c/i\u003e \u003cb\u003e但\u003c/b\u003e "]],null,"en"],[[["大多数应用程序没有特定的态度，除了 "]],null,"en"],[[["干净简单"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eThose that do are admittedly much harder to design.\u003c/i\u003e \u003cb\u003e那些确实难以设计的东西。\u003c/b\u003e"]],null,"en"],[[["对于所有其他人，有B＆WF。"]],null,"en"],[[["第2步：如何添加颜色"]],null,"en"],[[["最简单的颜色是一种颜色。"]],null,"en"],[[["在灰度网站上添加一种颜色可以简单有效地吸引眼球。"]],null,"en"],[[["\u003ci\u003eYou can also take it one step up.\u003c/i\u003e \u003cb\u003e你也可以迈出一步。\u003c/b\u003e \u003ci\u003eGrayscale +\u003c/i\u003e \u003cb\u003e灰度+\u003c/b\u003e "]],null,"en"],[[["二"]],null,"en"],[[[" 颜色，或灰度+单色调的多种颜色。"]],null,"en"],[[[" "]],null,"zh-CN"],[[["实践中的颜色代码 - 即等待，什么是色调？"]],null,"en"],[[["\n \u003ci\u003eThe web by and large talks about color as RGB hex codes.\u003c/i\u003e \u003cb\u003e网络大体上谈论颜色为RGB十六进制代码。\u003c/b\u003e \u003ci\u003eIt\u0026#39;s most useful to ignore those.\u003c/i\u003e \u003cb\u003e忽略这些是最有用的。\u003c/b\u003e \u003ci\u003eRGB is not a good framework for coloring designs.\u003c/i\u003e \u003cb\u003eRGB不是着色设计的好框架。\u003c/b\u003e \u003ci\u003eMuch more useful is\u003c/i\u003e \u003cb\u003e更有用的是\u003c/b\u003e "]],null,"en"],[[["HSB"]],null,"eo"],[[[" \u003ci\u003e(which is synonymous with HSV, and similar to HSL).\u003c/i\u003e \u003cb\u003e（与HSV同义，与HSL相似）。\u003c/b\u003e \u003ci\u003eHSB is better than RGB because it fits with the way we think about color naturally, and you can predict how changes to the HSB values will affect the color you\u0026#39;re looking at.\u003c/i\u003e \u003cb\u003eHSB优于RGB，因为它符合我们自然思考颜色的方式，您可以预测HSB值的变化将如何影响您正在查看的颜色。\u003c/b\u003e \u003ci\u003eIf this is news to you, here\u0026#39;s\u003c/i\u003e \u003cb\u003e如果这对你来说是新闻，请点击这里\u003c/b\u003e "]],null,"en"],[[["HSB颜色的良好入门"]],null,"en"],[[["."]],null,"zh-CN"],[[["通过修改 "]],null,"en"],[[["饱和"]],null,"en"],[[[" 和 "]],null,"en"],[[["亮度"]],null,"en"],[[[" 在单一的色调中，你可以产生多种颜色 - 黑暗，灯光，背景，口音，吸引眼球 - 但它并不会让人眼花缭乱。"]],null,"en"],[[["使用来自一个或两个基色调的多种颜色是 "]],null,"en"],[[["最可靠的方法来强调和中和元素，而不会使设计混乱"]],null,"en"],[[["."]],null,"zh-CN"],[[["根据我的经验，调整主题颜色以适应UI所要求的用例 "]],null,"en"],[[["最重要的技能 "]],null,"en"],[[["使用颜色，我写了一个实用的指南 "]],null,"en"],[[["这里"]],null,"en"],[[["."]],null,"zh-CN"],[[["关于颜色的一些其他说明"]],null,"en"],[[["\u003ci\u003eColor is the most complicated area of visual design.\u003c/i\u003e \u003cb\u003e颜色是视觉设计中最复杂的领域。\u003c/b\u003e \u003ci\u003eAnd while a lot of stuff on color is obtuse and not practical for finishing the design in front of you, I\u0026#39;ve seen some really good stuff out there.\u003c/i\u003e \u003cb\u003e虽然很多颜色的东西是钝的，并且不适合在你面前完成设计，但我已经看到了一些非常好的东西。\u003c/b\u003e"]],null,"en"],[[["一个小工具箱："]],null,"en"],[[["**学习UI设计"]],null,"en"],[[["*"]],null,"zh-CN"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eShameless plug: this is a course I\u0026#39;ve created, and it contains 3\u003c/i\u003e \u003cb\u003e无耻的插件：这是我创建的课程，它包含3个\u003c/b\u003e "]],null,"en"],[[["小时"]],null,"en"],[[[" \u003ci\u003eof video about designing with color (and over 20 hours of total videos on UI design topics).\u003c/i\u003e \u003cb\u003e有关使用颜色进行设计的视频（以及超过20小时的UI设计主题视频）。\u003c/b\u003e \u003ci\u003eCheck it out at [\u003c/i\u003e \u003cb\u003e在[查看]\u003c/b\u003e"]],null,"en"],[[["learnui.design]("]],null,"zh-CN"],[[["http://learnui.design/?utm_source=medium\u0026utm_medium=content\u0026utm_campaign=7-rules-part-1"]],null,"zh-CN"],[[[")*."]],null,"zh-CN"],[[["** UI设计中的颜色：A（实用）框架"]],null,"en"],[[["*"]],null,"zh-CN"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eIf you liked this section, but want to hear more about\u003c/i\u003e \u003cb\u003e如果你喜欢这个部分，但想了解更多\u003c/b\u003e "]],null,"en"],[[["\u003ci\u003ecolor* (as opposed to just black and white), this is your article.\u003c/i\u003e \u003cb\u003e颜色*（而不仅仅是黑色和白色），这是你的文章。\u003c/b\u003e \u003ci\u003eAnd guess who wrote it!\u003c/i\u003e \u003cb\u003e猜猜是谁写的！\u003c/b\u003e"]],null,"en"],[[["**永远不要使用黑色"]],null,"en"],[[["\u003ci\u003e** (Ian Storm Taylor).\u003c/i\u003e \u003cb\u003e**（伊恩风暴泰勒）。\u003c/b\u003e \u003ci\u003eTalks about how totally flat grays almost never appear in the real-world, and how saturating your shades of gray– especially your darker shades– adds a visual richness to your designs.\u003c/i\u003e \u003cb\u003e谈论完全平坦的灰色几乎从未出现在现实世界中，以及如何使灰色阴影饱和 - 特别是你的深色调 - 为你的设计增添了视觉上的丰富感。\u003c/b\u003e \u003ci\u003ePlus, saturated grays more closely mimic the real-world, which is its own virtue.\u003c/i\u003e \u003cb\u003e此外，饱和灰色更接近现实世界，这是它自己的美德。\u003c/b\u003e"]],null,"en"],[[["**可访问的颜色生成器"]],null,"en"],[[["\u003ci\u003e**.\u003c/i\u003e \u003cb\u003e**。\u003c/b\u003e \u003ci\u003eA handy tool for taking one color (your theme color, logo color, etc) and turning it into a whole, accessible color palette.\u003c/i\u003e \u003cb\u003e一种方便的工具，用于获取一种颜色（您的主题颜色，徽标颜色等）并将其转换为整个可访问的调色板。\u003c/b\u003e"]],null,"en"],[[["** Dribbble按颜色搜索"]],null,"en"],[[["\u003ci\u003e.** Another awesome way to find what works with a particular color.\u003c/i\u003e \u003cb\u003e。**另一种很棒的方法来找到适合特定颜色的东西。\u003c/b\u003e \u003ci\u003eTalk about practical.\u003c/i\u003e \u003cb\u003e谈实用。\u003c/b\u003e \u003ci\u003eIf you already have one color decided, come look at what the world\u0026#39;s best designers are doing/matching with that color.\u003c/i\u003e \u003cb\u003e如果你已经确定了一种颜色，那么来看看世界上最好的设计师正在做什么/与那种颜色匹配。\u003c/b\u003e"]],null,"en"],[[["规则3：加倍你的空白"]],null,"en"],[[["要使外观设计的UI，增加大量的喘息空间。"]],null,"en"],[[["在规则2中，我说B＆WF迫使设计师思考 "]],null,"en"],[[["间距和布局"]],null,"en"],[[[" \u003ci\u003ebefore considering color, and how that\u0026#39;s a good thing.\u003c/i\u003e \u003cb\u003e在考虑颜色之前，以及这是一件好事。\u003c/b\u003e \u003ci\u003eWell, it\u0026#39;s time we talk about spacing and layout.\u003c/i\u003e \u003cb\u003e好吧，是时候讨论间距和布局了。\u003c/b\u003e"]],null,"en"],[[["如果您从头开始编写HTML，那么您可能熟悉默认情况下HTML在页面上的布局方式。"]],null,"en"],[[["\u003ci\u003eBasically, everything is smashed towards the top of the screen.\u003c/i\u003e \u003cb\u003e基本上，一切都被砸到了屏幕的顶部。\u003c/b\u003e \u003ci\u003eThe fonts are small;\u003c/i\u003e \u003cb\u003e字体很小;\u003c/b\u003e \u003ci\u003ethere\u0026#39;s absolutely no space between lines.\u003c/i\u003e \u003cb\u003e线条之间绝对没有空间。\u003c/b\u003e \u003ci\u003eThere\u0026#39;s a\u003c/i\u003e \u003cb\u003e有个\u003c/b\u003e "]],null,"en"],[[["biiii"]],null,"la"],[[[" \u003ci\u003eof space between paragraphs, but it isn\u0026#39;t much.\u003c/i\u003e \u003cb\u003e段落之间的空间，但并不多。\u003c/b\u003e \u003ci\u003eThe paragraphs just stretch on to the end of the page, whether that\u0026#39;s 100 px or 10,000 px.\u003c/i\u003e \u003cb\u003e段落只是延伸到页面的末尾，无论是100 px还是10,000 px。\u003c/b\u003e"]],null,"en"],[[["从美学上讲，就是这样 "]],null,"en"],[[["可怕"]],null,"en"],[[[". "]],null,"zh-CN"],[[["如果你想制作外观的UI "]],null,"en"],[[["设计"]],null,"en"],[[["，你需要增加很多喘息空间"]],null,"en"],[[["."]],null,"zh-CN"],[[["有时是一个荒谬的数额。"]],null,"en"],[[[" "]],null,"zh-CN"],[[["空白，HTML和CSS"]],null,"en"],[[["\n 如果你像我一样习惯用CSS格式化，那么 "]],null,"en"],[[["默认是没有空格"]],null,"en"],[[["\u003ci\u003e, it\u0026#39;s time to untrain yourself of those bad habits.\u003c/i\u003e \u003cb\u003e，是时候把自己弄清楚那些坏习惯了。\u003c/b\u003e \u003ci\u003eStart thinking of whitespace as the default— everything starts as whitespace, until you take it away by adding a page element.\u003c/i\u003e \u003cb\u003e开始将空白视为默认空间 - 所有内容都以空格开头，直到您通过添加页面元素将其删除。\u003c/b\u003e \u003ci\u003eSound zen?\u003c/i\u003e \u003cb\u003e声音禅？\u003c/b\u003e \u003ci\u003eI think it\u0026#39;s a big reason people still sketch this stuff out on paper.\u003c/i\u003e \u003cb\u003e我认为这是人们在纸上画出这些东西的一个重要原因。\u003c/b\u003e\n "]],null,"en"],[[["从空白页开始意味着从空白开始"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eYou think of margins and spacing right from the very beginning.\u003c/i\u003e \u003cb\u003e你从一开始就想到了边距和间距。\u003c/b\u003e \u003ci\u003eEverything you draw is a conscious whitespace-removing decision.\u003c/i\u003e \u003cb\u003e你绘制的所有内容都是有意识的删除空白的决定。\u003c/b\u003e\n "]],null,"en"],[[["从一堆无格式的HTML开始意味着从内容开始"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eSpacing is the afterthought.\u003c/i\u003e \u003cb\u003e间距是事后的想法。\u003c/b\u003e \u003ci\u003eIt has to be explicitly stated.\u003c/i\u003e \u003cb\u003e必须明确说明。\u003c/b\u003e"]],null,"en"],[[["这是一个说明性的音乐播放器概念 "]],null,"en"],[[["Piotr Kwiatkowski"]],null,"pl"],[[["."]],null,"zh-CN"],[[["请特别注意左侧的菜单。"]],null,"en"],[[["菜单项之间的垂直空间完全*两次"]],null,"en"],[[["* "]],null,"zh-CN"],[[["\u003ci\u003ethe height of the text itself.\u003c/i\u003e \u003cb\u003e文本本身的高度。\u003c/b\u003e \u003ci\u003eYou\u0026#39;re looking at 12px font with just as much padding above and below it.\u003c/i\u003e \u003cb\u003e您正在查看12px字体，其上方和下方的填充量都相同。\u003c/b\u003e"]],null,"en"],[[["或者看看列表标题。 "]],null,"en"],[[["\u003ci\u003eThere\u0026#39;s a 15px space between the word “PLAYLISTS” and its own underline.\u003c/i\u003e \u003cb\u003e单词“PLAYLISTS”和它自己的下划线之间有15px的空格。\u003c/b\u003e \u003ci\u003eThat\u0026#39;s more than the\u003c/i\u003e \u003cb\u003e这不仅仅是\u003c/b\u003e "]],null,"en"],[[["帽高"]],null,"en"],[[[" 字体本身！"]],null,"en"],[[[" 这就是说清单之间的25个像素。"]],null,"en"],[[["左侧边栏显示文本行之间的宽松间距等等。"]],null,"en"],[[["\u003ci\u003ePiotr was conscientious about putting in extra space here, and it paid off.\u003c/i\u003e \u003cb\u003ePiotr认真考虑在这里增加额外的空间，并且得到了回报。\u003c/b\u003e \u003ci\u003eWhile this is just a concept he put together for the fun of it (as far as I know), as far as aesthetics go, it\u0026#39;s beautiful enough to compete with the best music UIs out there.\u003c/i\u003e \u003cb\u003e虽然这只是他为了它的乐趣而放在一起的概念（据我所知），就美学而言，它足以与最好的音乐UI竞争。\u003c/b\u003e"]],null,"en"],[[["好的，慷慨的空白可以使一些最混乱的界面看起来像邀请和简单的论坛。"]],null,"en"],[[["或维基百科。"]],null,"en"],[[["\u003ci\u003eYou can find plenty of argument that, say, the Wikipedia redesign leaves out key functionality to using the site.\u003c/i\u003e \u003cb\u003e你可以找到很多论据，比如，维基百科的重新设计省去了使用该网站的关键功能。\u003c/b\u003e \u003ci\u003eBut you can\u0026#39;t say it\u0026#39;s not a good way to learn!\u003c/i\u003e \u003cb\u003e但你不能说这不是一个好学的方法！\u003c/b\u003e"]],null,"en"],[[["在你的线之间放置空间。"]],null,"en"],[[["在元素之间放置空格。"]],null,"en"],[[["在元素组之间放置空格。"]],null,"en"],[[["分析什么有效"]],null,"en"],[[["."]],null,"zh-CN"],[[["好的，这包括第1部分。感谢您的坚持！"]],null,"en"],[[["在 "]],null,"en"],[[["第2部分"]],null,"en"],[[["，我将谈论最后4条规则："]],null,"en"],[[[" "]],null,"zh-CN"],[[["4.了解在图像上叠加文本的方法"]],null,"en"],[[["\n "]],null,"zh-CN"],[[["5.使文本弹出和不弹出"]],null,"en"],[[["\n "]],null,"zh-CN"],[[["6.只使用好的字体"]],null,"en"],[[["\n "]],null,"zh-CN"],[[["7.像艺术家一样窃取"]],null,"en"],[[["如果你在第1部分学到了有用的东西， "]],null,"en"],[[["阅读第2部分"]],null,"en"],[[["."]],null,"zh-CN"],[[["\u003ci\u003eStill can\u0026#39;t get enough?\u003c/i\u003e \u003cb\u003e仍然不能得到足够的？\u003c/b\u003e \u003ci\u003eIntroducing… Learn UI Design\u003c/i\u003e \u003cb\u003e介绍...学习UI设计\u003c/b\u003e"]],null,"en"],[[["我一直在努力创造 "]],null,"en"],[[["单一最全面 "]],null,"en"],[[["在线视频课程学习 "]],null,"en"],[[["界面设计的实用技巧"]],null,"en"],[[["."]],null,"zh-CN"],[[["学习UI设计涵盖了各种主题："]],null,"en"],[[["颜色"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003ePicking good colors, adjusting them for different purposes in your interface, developing a palette, fixing clashing colors, and more.\u003c/i\u003e \u003cb\u003e选择好的颜色，在界面中为不同的目的调整它们，开发调色板，修复碰撞颜色等等。\u003c/b\u003e"]],null,"en"],[[["活版印刷"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eChoosing fonts, styling text, pairing fonts, and more.\u003c/i\u003e \u003cb\u003e选择字体，样式文本，配对字体等。\u003c/b\u003e"]],null,"en"],[[["设计基础"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eSpacing, alignment, grids, layout, lighting, shadows, and more.\u003c/i\u003e \u003cb\u003e间距，对齐，网格，布局，灯光，阴影等。\u003c/b\u003e"]],null,"en"],[[["用户界面元素。"]],null,"en"],[[[" 表单控件（如按钮和文本框），图标，图像（如摄影和插图），表格和列表（对于移动应用程序设计非常重要）等等。"]],null,"en"],[[["\u003ci\u003eHere\u0026#39;s an idea of how much content there is.\u003c/i\u003e \u003cb\u003e这里有一个关于有多少内容的想法。\u003c/b\u003e \u003ci\u003eThe topics you\u0026#39;ve already heard about — lighting, use of gray, and spacing — each have their\u003c/i\u003e \u003cb\u003e您已经听过的主题 - 照明，使用灰色和间距 - 每个都有它们的主题\u003c/b\u003e "]],null,"en"],[[["拥有"]],null,"en"],[[[" 视频，总计 "]],null,"en"],[[["1小时52分钟"]],null,"sv"],[[["."]],null,"zh-CN"],[[["有一个 "]],null,"en"],[[["音"]],null,"fr"],[[[" 本课程的内容： "]],null,"en"],[[["20多个小时的视频"]],null,"en"],[[[" 在 "]],null,"en"],[[["40多个视频课程"]],null,"en"],[[["."]],null,"zh-CN"],[[["在几乎每个视频中，你都会 "]],null,"en"],[[["看我在Sketch中设计"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eThis is important.\u003c/i\u003e \u003cb\u003e这个很重要。\u003c/b\u003e \u003ci\u003eI\u0026#39;m not teaching some theoretical framework here.\u003c/i\u003e \u003cb\u003e我这里没有教授一些理论框架。\u003c/b\u003e \u003ci\u003eInstead, everything I show you is the tips, tricks, and frameworks I use to design interfaces every day.\u003c/i\u003e \u003cb\u003e相反，我向您展示的每件事都是我每天用来设计界面的提示，技巧和框架。\u003c/b\u003e \u003ci\u003eThink of it as watching over my shoulder as I teach you everything I know.\u003c/i\u003e \u003cb\u003e把它想象成看着我的肩膀，因为我教会了你所知道的一切。\u003c/b\u003e"]],null,"en"],[[["例如，在“灰色”视频中（是：27分钟 "]],null,"en"],[[["所有关于使用单一颜色"]],null,"en"],[[["\u003ci\u003e), I start by showing you a practical technique to make your grays match your theme colors, no matter what those colors are.\u003c/i\u003e \u003cb\u003e），我首先向您展示一种实用技巧，使您的灰色与您的主题颜色相匹配，无论这些颜色是什么。\u003c/b\u003e \u003ci\u003eThen I do another demo to show off gray\u0026#39;s versatility, explaining ways in which its\u003c/i\u003e \u003cb\u003e然后我做另一个演示来展示灰色的多功能性，解释它的方式\u003c/b\u003e "]],null,"en"],[[["明敏"]],null,"en"],[[[" 实际上是一个 "]],null,"en"],[[["强度"]],null,"en"],[[["\u003ci\u003e.\u003c/i\u003e \u003cb\u003e。\u003c/b\u003e \u003ci\u003eThis includes some tips that took me\u003c/i\u003e \u003cb\u003e这包括一些带我的提示\u003c/b\u003e "]],null,"en"],[[["年份"]],null,"en"],[[[" 通知。"]],null,"en"],[[["\u003ci\u003eFinally, I explain why gray is the classiest color, and used by so many luxury and fashion brands.\u003c/i\u003e \u003cb\u003e最后，我解释了为什么灰色是最经典的颜色，并被许多奢侈品和时尚品牌所采用。\u003c/b\u003e \u003ci\u003eThen I explain the homework for the lesson and wrap up.\u003c/i\u003e \u003cb\u003e然后我解释课程的作业并结束。\u003c/b\u003e \u003ci\u003eBy the end, we\u0026#39;ve done 3 live demos, explained a few key tricks for how to add gray to your designs, and looked at 10 well-designed real-world examples (including 1 designed by me).\u003c/i\u003e \u003cb\u003e最后，我们完成了3个现场演示，解释了如何为设计添加灰色的一些关键技巧，并查看了10个精心设计的真实世界示例（包括由我设计的1个）。\u003c/b\u003e"]],null,"en"],[[["以下是人们对学习UI设计的看法："]],null,"en"],[[[" “学习UI设计就像通过实际坐在驾驶舱内与飞行员一起学习如何驾驶飞机 -  Erik不断设计/重新设计 "]],null,"en"],[[["现实世界的例子"]],null,"en"],[[[" \u003ci\u003eright in front of you, explaining why X is good or bad, and how to go about making it even better.” — Mudassir Ali, Frontend Engineer, Canva “Learn UI Design\u0026#39;s straightforward approach, illustrated with real-life examples and tutorials, was extremely helpful and eye-opening.\u003c/i\u003e \u003cb\u003e就在你的面前，解释为什么X好或坏，以及如何让它变得更好。“ -  Mudassir Ali，前端工程师，Canva”学习UI设计的简单方法，用现实生活中的例子和教程说明，非常有帮助，令人大开眼界。\u003c/b\u003e \u003ci\u003eI would\u003c/i\u003e \u003cb\u003e我会\u003c/b\u003e "]],null,"en"],[[["极力推荐"]],null,"en"],[[[" 本课程面向UX设计师，希望将UI设计添加到他们的工具包中。“ -  Sarah Kim，UX设计主管”Erik\u0026#39;s "]],null,"en"],[[["务实的方法"]],null,"en"],[[[" \u003ci\u003eto design has taught me infinitely more than what reading any design books ever did!\u003c/i\u003e \u003cb\u003e设计已经教会了我比阅读任何设计书籍所做的更多！\u003c/b\u003e \u003ci\u003eAway with the books, and one more video please.” — Anders Nysom, Freelance Developer\u003c/i\u003e \u003cb\u003e请远离书籍，还有一个视频。“ -  Anders Nysom，自由开发者\u003c/b\u003e"]],null,"en"],[[["\u003ci\u003eIf you\u0026#39;re a dev, UX designer, or PM, and want to add visual design to your skillset, this course is tailor-made for you.\u003c/i\u003e \u003cb\u003e如果您是开发，UX设计师或PM，并希望为您的技能组添加视觉设计，本课程将为您量身定制。\u003c/b\u003e \u003ci\u003eHop on over to\u003c/i\u003e \u003cb\u003e跳到\u003c/b\u003e "]],null,"en"],[[["learnui.design"]],null,"zh-CN"],[[[" 更多。"]],null,"en"],[[["哦，最后：我有一个 "]],null,"en"],[[["设计通讯"]],null,"en"],[[[" 我故意发出的 "]],null,"en"],[[["很少"]],null,"en"],[[[" 但 "]],null,"en"],[[["非常高的价值"]],null,"en"],[[[" \u003ci\u003edesign articles (like the one above).\u003c/i\u003e \u003cb\u003e设计文章（如上所述）。\u003c/b\u003e \u003ci\u003eIf you want to see stuff like this every month (or 6) in your inbox (basically all of it unpublished anywhere else), you should take a moment and\u003c/i\u003e \u003cb\u003e如果你想在你的收件箱中每个月（或6个）看到这样的东西（基本上所有这些都未在其他地方发布），你应该花一点时间\u003c/b\u003e "]],null,"en"],[[["注册"]],null,"en"],[[[":"]],null,"zh-CN"]]]


const markdownAst = markdown2ast(en);
const [replaceMarkdown, i18nMap] = i18nReplace(markdownAst);

function rmHtml(value) {
  return value.match(/<b>(.*?)<\/b>/g).map(item => item.match(/<b>(.*)<\/b>/)[1]).join('');
}

const translateMap = translateText[0].map(item => {
  const text = item[0][0][0];
  if(text.indexOf('<b>') > -1) {
    return rmHtml(text);
  }
  return text;
})

const translateAst = i18nTranslate(replaceMarkdown, translateMap);

console.log(ast2markdown(translateAst));
