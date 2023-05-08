---

slug: news-archive
title: News Archive
path: '/projects/news-archive'
summary: <p>The CSUMB News Archive is a React web application which allows campus staff to view and search for archived news articles for Cal State University, Monterey Bay. The implementation of this application allows unneeded news stories to be removed from the campus website database while keeping them for reference.</p><p>I used NodeJS to convert the news articles to markdown files, and hosted them using GatsbyJS, a static site generator. This tech stack allowed me to host the project for free, saving the University from annual hosting costs.</p><a href="/news-archive">Read the case study</a>
githubURL: https://github.com/csumb-archives/news-gatsby
url: https://csumb-news-archive.netlify.app

---For this project, the CSU Monterey Bay campus marketing department needed a long term, cost efficient solution for archival and retrieval of the 2,400 news articles published from 2005 to 2020. Using Gatsby and hosting it with Netlify allowed me to eliminate the yearly costs traditionally associated with hosting a website with a significant amount of content.

To begin, I wrote a MySQL query to retrieve all news articles since 2010 from the database. This gave me a large JSON file with an object for each page. Within those objects were objects for each content block on the page, denoting the content type (such as header or text), and the content within it. I decided to convert these objects into HTML files to allow easy retrieval by non-technical users if a news article needed to be brought to the campus website.

Next, I built a [NodeJS application](https://github.com/codywall/archive-transformer) to convert these JSON objects into markdown files. I used the file system module within Node to walk through these objects and create HTML nodes for each of the content blocks, then append those to a markdown file. A tricky aspect was getting the page title, converting it to a slug, and adding both of them to the frontmatter of the markdown files. This allowed me to access those variables when I went to create the pages.

The news articles from 2005 to 2010 lived in their own news archive, created by a developer before me. They contained a lot of formatting such as extra divs, which I needed to strip so they would match the files I created. I used a package called Cheerio to go through and remove any extraneous HTML nodes, cleaning the files significantly. The frontmatter was also updated with the correct information.

Now that I had around 2,400 markdown files, I created a GatsbyJS application to display them. I used a folder containing the markdown files as a GraphQL data source, and created pages for each of the files, using the appropriate page titles and slugs. I also have a section where you can browse all articles alphabetically, and implemented pagination to help with loading times.

Lastly, I implemented a search feature. Initially I had set up search to only filter results by article title, but after talking with the marketing department, I altered the app to search for terms in the body of the article as well. Setting up the search box using React was a little bit trickier than using vanilla javascript, but it was worth it. I was able to implement a loading indicator to keep the user informed, as the search index takes a bit of time to load the first time the site is opened.

Over the course of this project, I ran into a lot of performance issues with Gatsby, as initializing 2,400 pages from markdown files can be sluggish. I found that others had had similar issues and I was able to rewrite my GraphQL queries to be more efficient. I also became more familiar with Node, and learned how to manipulate files in bulk using Cheerio and the Node file system module.

Overall, there were a lot of pieces to this project, and it was a great learning experience. I became more familiar with Node and Gatsby. I also feel confident I could handle a web scraping project with the Cheerio experience I gained. And most importantly, the marketing department was happy with the end result, and the campus doesn't have an annual bill.
