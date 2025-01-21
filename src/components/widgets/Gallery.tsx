import { component$ } from '@builder.io/qwik';
import { Headline } from '../ui/Headline';
import { PageWrapper } from '../common/PageWrapper';
import { ContentWrapper } from '../common/ContentWrapper';
import PricingTab from '../widgets/PricingTab';

export default component$(() => {
  return (
    <div>
    <PageWrapper>
      <Headline
        title={"Our Gallery of Past Work"}
        subtitle={"Choose a one-time payment or pay it off over a longer period"}
        highlight={"Pricing"}
      />
      {/* Page content goes here */}
    </PageWrapper>

    <section class="portfolio-section" id="portfolio">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Project Gallery</h2>
          <p>Use all the same size pictures :)</p>
        </div>
      </div>
      <div class="portfolio-menu mt-2 mb-4">
        <nav class="controls">
          <button type="button" class="control outline" data-filter="all">All</button>
          <button type="button" class="control outline" data-filter=".web">Web Design</button>
          <button type="button" class="control outline" data-filter=".dev">Development</button>
          <button type="button" class="control outline" data-filter=".wp">WordPress</button>
        </nav>
      </div>
      <ul class="row portfolio-item">
        <li class="mix dev col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix web col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix wp col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix dev col-xl-3 col-md-4 col-12 col-sm-6 pd ">
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix web col-xl-3 col-md-4 col-12 col-sm-6 pd ">
          <img src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix wp col-xl-3 col-md-4 col-12 col-sm-6 pd ">
          <img src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix dev col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix web col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix wp col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix dev col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix web col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="mix wp col-xl-3 col-md-4 col-12 col-sm-6 pd">
          <img src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" itemProp="thumbnail" alt="Image description" />
          <div class="portfolio-overlay">
            <div class="overlay-content">
              <p class="category">Project Name</p>
              <a href="#" title="View Project" target="_blank">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-link" aria-hidden="true"></i></span></p>
                </div>
              </a>
              <a data-fancybox="item" title="click to zoom-in" href="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80" data-size="1200x600">
                <div class="magnify-icon">
                  <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
                </div>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

    </div>
  );
});










