import React, { Component } from "react";
import Sectiontitle from "../Banner/Sectiontitle";
import BlogItems from "../Blog/BlogItems";
import Reveal from "react-reveal/Reveal/";
class Blog extends Component {
  render() {
    return (
      <section className="blog_area" id="blog">
        <div className="container">
          <Sectiontitle
            Title="Our Blogs"
            TitleP="The old question 'Is it in the database?' will be replaced by 'Is it on the blockchain?'."
          />

          <Reveal effect="fadeInUp" duration={1000}>
            <div className="row">
              <BlogItems
                bTitle="Will Blockchain Technology Unlock the Metaverse’s True Value?"
                bDetails="The metaverse is made up of virtual worlds where people can do many things they do in real life. To paraphrase Meta CEO Mark Zuckerberg, it’s an “embodied internet”, where instead of just viewing content “you are in it”. And cryptocurrency will almost certainly become the primary payment method in the metaverse."
                btnText="Read More"
                image="944-hands_smartphone.jpg"
                Pdata="Jan 14"
              />
              <BlogItems
                bTitle="I have questions about this emerging... um... art form? Platform?"
                bDetails="There’s nothing like an explosion of blockchain news to leave you thinking, “Um… what’s going on here?”"
                btnText="Read More"
                image="post-img2.jpg"
                Pdata="Mar 30"
              />
              <BlogItems
                bTitle="A future triple entry accounting framework using blockchain technology"
                bDetails="The study adopts a single case study approach to bring into conversation, ideas, and views of several scholars on triple entry accounting (TEA). "
                btnText="Read More"
                image="post-img3.jpg"
                Pdata="Dec 04"
              />
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
}
export default Blog;
