---
slug: news-archive
title: News Archive
summary: The CSUMB News Archive is a React web application which allows campus staff to view and search for archived news articles for Cal State University, Monterey Bay. The implementation of this application allows unneeded news stories to be removed from the campus website database while keeping them for reference. This project saved the University from paying unnecessary database hosting costs, as it is a no cost solution.
githubURL: https://github.com/csumb-archives/news-gatsby
url: https://csumb-news-archive.netlify.app

---

For this project, the CSU Monterey Bay campus marketing department needed a long term, cost efficient solution for archival and retrieval of the 2,400 news articles published from 2005 to 2020. Using Gatsby and hosting it with Netlify allowed me to eliminate the yearly costs traditionally associated with hosting a website with a significant amount of content.

To begin, I wrote a MySQL query to retrieve all news articles since 2010 from the database. This gave me a large JSON file with an object for each page. Within those objects were objects for each content block on the page, denoting the content type (such as header or text), and the content within it. I decided to convert these objects into HTML files to allow easy retrieval by non-technical users if a news article needed to be brought to the campus website.

Next, I built a [NodeJS application](https://github.com/codywall/archive-transformer) to convert these JSON objects into markdown files. I used the file system module within Node to walk through these objects and create HTML nodes for each of the content blocks, then append those to a markdown file. A tricky aspect was getting the page title, converting it to a slug, and adding both of them to the frontmatter of the markdown files. This allowed me to access those variables when I went to create the pages.

The news articles from 2005 to 2010 lived in their own news archive, created by a developer before me. They contained a lot of formatting such as extra divs, which I needed to strip so they would match the files I created. I used a package called Cheerio to go through and strip any extraneous HTML nodes, cleaning the files significantly. The frontmatter was also updated with the correct information.

Now that I had around 2,400 markdown files, I created a GatsbyJS application to display them. 


