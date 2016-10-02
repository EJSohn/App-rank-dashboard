from collections import Counter
import lxml, urllib2

from bs4 import BeautifulSoup


class NationTypeError(Exception):
    self.msg = 'nation has to be kr or us'
    def __str__(self):
        return self.msg


class CategoryHandler:
    def __init__(self, nation):
        if (nation!='kr' or nation!='us'):
            raise NationTypeError
        else:
            # url that retrieving rss feed for ios paid app in top rank 100
            url = 'https://itunes.apple.com/'+nation+'/rss/toppaidapplications/limit=100/xml'
            # crate soup object for xml parsing
            self.soup = BeautifulSoup(urllib2.urlopen(url), "xml")
            self.entries = soup.find_all('entry')

    def whole_category(self, language='label'):
        """
        Args: 
            language: can be 'label'(=korean category name) 
            or 'term'(english category name). default is label.
        Returns:
            a list consist of category names in top rank 100.
            example:
                ['category_name',
                'category_name2',
                ...]
        """
        category_list = [ entry.category[language] for entry in self.entries ]

        return category_list


    def top_ten_category():
        """
        Returns:
            a list consist of category name and count in top category rank 10. 
            example:
                [{'name':category_name, 'counts':number},
                {'name':category_name2, 'counts':number2},
                ...]
        """

        category_list = self.whole_category()
        counts = Counter(category_list)

        top_ten_tuple = counts.most_common(10)
        top_ten_list = [ { 'name': category[0], 'counts': category[1] } \
                        for category in top_ten_tuple  ]

        return top_ten_list