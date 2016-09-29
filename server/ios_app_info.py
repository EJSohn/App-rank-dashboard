from bs4 import BeautifulSoup
from collections import Counter
import lxml, urllib2

# declare common data

# url that retrieving rss feed for ios paid app in top rank 100
url = 'https://itunes.apple.com/kr/rss/toppaidapplications/limit=100/xml'
# crate soup object for xml parsing
soup = BeautifulSoup(urllib2.urlopen(url), "xml")

entries = soup.find_all('entry')


def whole_category(language='label'):
    # return category names in top rank 100.

    """
    Args: 
        language: can be 'label'(=korean category name) 
        or 'term'(english category name). default is label.
    """
    category_list = [ entry.category[language] for entry in entries ]
    category_kind  = list(set(category_list))

    return category_kind