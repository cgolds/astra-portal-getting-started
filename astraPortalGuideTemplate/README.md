<!-- 
This is the overview section. 
The overview should provide users a high level explanation of what your guide is all about at a glance. 
What will they learn, what will they get out of it?
Notice the formatting being used. 
Title, any related tags, difficulty, time to complete, any prerequisites
 -->
# Astra Portal Getting Started TEMPLATE
```ini
[beginner][database][apache cassandra]
```

> ⚠️ Difficulty: **`Beginner`, we don't expect you to know how to write "getting started" guides for DataStax Astra.**
>
> Time to complete: ~ 10 mins

Hiya. Welcome to the Astra getting started guide template. Use this template to help "guide" you through authoring "getting started" guides within DataStax Astra. ;)

"Getting Started" guides are a unique way to help Astra users learn about a topic or how to perform a set of actions. The goal is to make it dead simple for a user to run through a guide and achieve some goal.

It is assumed that if you are following this template that you intend to write a guide for DataStax Astra. With that, we highly encourage you to donwload this markdown file and view it in both edit and rendered modes so you can easily see hidden comments.

Feel free to copy this readme.md in its entirety and use within your guide to get started.

**In this guide, we will discuss**
- How to get started
- Where to put your guide
- How to format guides and create actions
- What NOT to do 😬
- How to submit a guide

**Prerequisites**

**If you don't have any prerequisite content just remove this section altogether.**

This section contains items that a user may need from outside of Astra. Examples are things like Maven for Java or installing Node or Python. 
- If any prereqs are required be explicit and call them out
- Provide links to needed resources
- Here is an example:
    - [Download] and [install](https://maven.apache.org/install.html) Maven.

[Download]: https://maven.apache.org/download.cgi
<!--
You can use inline links (install) or provide them later with a named reference (Download). Either is fine. Up to you.
 -->

<!-- 
For each section use ##, the number of the section itself, and the section title. These will automatically
be picked up by a preprocessor and used to properly style the guide. While you can generally use 
whatever markdown you want you don't need to worry about trying to match styles within Astra, we'll do that for you.
Notice the example below "## 1 How to get started".
 -->
## 1  How to get started
### Download the repo locally
You'll be submitting a pull request for your content so you'll want to download this repo locally so you can easily create, iterate on, and commit changes.

If you haven't already, ensure you view this markdown in **EDIT** mode to get instructions for each section.

<!-- 
Notice the code blocks in the following section. These are completely valid to use within guides.
 -->
### Create a branch
You'll need to create a branch to submit your pull request. Use the following command, **replacing the branch name**, for something unique to your guide.
```shell
git checkout -b yourbranchnamehere
```

The above command should have auto switched to your new branch. Let's check anyway just to be sure.
```shell
git branch
```

## 2  Where to put your guide
### Create a folder in the repo to contain guide contents
Ensure you create your guide folder with something identifiable. For example, we could use something like "/astraPortalGuideTemplate" for this guide. It's pretty open. We just ask you not use something like "/guide" that's overly generic.

### Copy **THIS** readme.md
Make a copy of **THIS** readme.md to use in your own guide as a starting point and store in your newly created folder.

## 3 How to format guides and create actions
Generally, formatting is pretty open and follows normal markdown styles. The main caveats being guide metadata in the overview, using numbered sections for proper styling within Astra, and using **actions**.

### Uhhh, what are actions?
Glad you asked. **Actions** are special options that allow you to easily bring a user through a set of Astra specific operations with a simple button click. The goal is to remove friction from the user experience and make it easier for guide creators to add in more complex operations.

An example is database creation. If you want a user to create a database then use ```<<createDatabase>>``` directly in markdown. Again, use **EDIT** mode to see a real example.
<<createDatabase>>

If you've done this correctly in markdown you'll only see "<>" rendered. However, within an Astra guide this will translate into a fully operational button with status updates and other functionality. **NOTE** that **actions** will potentially bring users into a new flow to complete the **action**, but will then bring users back to the guide once exited.

### Currently available **ACTIONS**
```<<createDatabase>>```

```<<createToken>>```

```<<launchCQLConsole>>```

```<<downloadSCB>>```

```<<launchDataLoader>>```

## 4 What NOT to do 😬
We ask that you don't include artifacts that go stale, like UI screenshots that change over time. Our goal is to provide guides that are as maintenance free as possible for both you and our users. Nothing like using a guide that was great a year ago only to find out nothing in it works halfway through.

## 5 How to submit a guide