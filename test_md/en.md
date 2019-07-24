
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
