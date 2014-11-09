import urllib
import xml.etree.ElementTree as ET

def parseXML(empty_list,tag_id):
	"""Parse a single metric from the API results and append it to a list"""
	for elem in tree.iter(tag=tag_id):
		empty_list.append(elem.text)

data = open('../map_utils/wm.csv', 'r')
output = open('query_results.txt','w')

buildings = []
for line in data:
	line = line.strip()
	buildings.append(line)

counter = 0

for i in buildings:
	counter += 1
	print counter
	
	url = 'http://api.geonames.org/search?q=' + i + '&maxRows=10&username=kelvinabrowka'
	tree = ET.parse(urllib.urlopen(url))

	names = []
	geoname_id = []
	loc_type = []
	lat = []
	lng = []

	output.write('-'*20)
	output.write('\n')

	for elem in tree.iter(tag='name'):
		names.append(elem.text)
	for elem in tree.iter(tag='geonameId'):
		geoname_id.append(elem.text)
	for elem in tree.iter(tag='fcode'):
		loc_type.append(elem.text)
	for elem in tree.iter(tag='lat'):
		lat.append(elem.text)
	for elem in tree.iter(tag='lng'):
		lng.append(elem.text)

for i,j,k,m,n in zip(names,geoname_id,loc_type,lat,lng):
	li = []
	li.append(i)
	li.append(j)
	li.append(k)
	li.append(m)
	li.append(n)
	for l in li:
		output.write(l)
		output.write('\n')

output.close()