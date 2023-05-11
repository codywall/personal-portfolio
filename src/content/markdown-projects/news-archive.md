---
slug: news-archive
title: Digital Transformation of CSU Monterey Bay News Archive
path: '/projects/news-archive'
summary: <p>The CSUMB News Archive is a React web application which allows campus staff to view and search for archived news articles for Cal State University, Monterey Bay. The implementation of this application allows unneeded news stories to be removed from the campus website database while keeping them for reference.</p><p>I used NodeJS to convert the news articles to markdown files, and hosted them using GatsbyJS, a static site generator. This tech stack allowed me to host the project for free, saving the University from annual hosting costs.</p><a href="/news-archive">Read the case study</a>
githubURL: https://github.com/csumb-archives/news-gatsby
url: https://csumb-news-archive.netlify.app
---

In a transformative endeavor for the CSU Monterey Bay campus, I was tasked with the challenge of designing a cost-effective, long-term solution for the archival and retrieval of over 2,400 news articles published from 2005 to 2020. The project demanded a robust understanding of web scraping, data manipulation, static site generation, and meticulous planning. The result was a technologically superior news archive, devoid of recurring hosting costs, and powered by Gatsby and Netlify.

The project kicked off with a sophisticated MySQL query, executed to extract all the news articles dating back to 2010. This process yielded a vast JSON file comprising individual objects for each page, further divided into separate content blocks, each with its own content type and content. Realizing the need for a user-friendly interface for non-technical personnel, I decided to transform these objects into HTML files for easy access and retrieval.

In the next phase, I constructed a NodeJS application for converting these JSON objects into markdown files. Utilizing the file system module within Node, I navigated through the objects to fabricate HTML nodes for every content block, which were subsequently appended to a markdown file. This phase presented a unique challenge of extracting the page title, converting it into a slug, and integrating both into the frontmatter of the markdown files. This process ensured efficient accessibility of these variables during page creation.

The older news articles from 2005 to 2010 resided in a separate archive, laden with unnecessary formatting and extra divs that needed elimination. Leveraging the Cheerio package, I was able to strip out extraneous HTML nodes, resulting in cleaner, more streamlined files. Concurrently, I ensured the frontmatter was updated with accurate information.

Having created approximately 2,400 markdown files, I embarked on the development of a GatsbyJS application to display the content. I employed a folder housing the markdown files as a GraphQL data source, thus creating pages for each file with correct page titles and slugs. An additional feature included an alphabetical browsing section for all articles, complemented by pagination for enhanced loading times.

To elevate user experience, I integrated a robust search feature. Although initially designed to filter results by article title, feedback from the marketing department led to its refinement, enabling search for terms within the body of the article as well. Implementing the search box with React was intricate, but the end product justified the effort. It now showcases a loading indicator for improved user interaction during the initial load time of the search index.

Despite encountering performance challenges due to the initialization of a large number of pages from markdown files, I was able to optimize my GraphQL queries, drawing insights from others who faced similar issues. This exercise significantly enhanced my familiarity with Node and Gatsby, equipping me with invaluable experience in web scraping with Cheerio and mass file manipulation using the Node file system module.

In conclusion, this extensive project served as an enriching learning experience, allowing me to apply and expand my skills in web scraping, data manipulation, and static site generation. The most gratifying outcome, however, was the appreciation received from the marketing department and the elimination of an annual bill for the campus, truly encapsulating the success of this project.
