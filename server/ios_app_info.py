from bs4 import BeautifulSoup
from collections import Counter
import lxml, urllib2

# declare common data

# url that retrieving rss feed for ios paid app in top rank 100
url = 'https://itunes.apple.com/kr/rss/toppaidapplications/limit=100/xml'
# crate soup object for xml parsing
soup = BeautifulSoup(urllib2.urlopen(url), "xml")

entries = soup.find_all('entry')
