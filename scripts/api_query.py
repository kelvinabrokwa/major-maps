import urllib
import xml.etree.ElementTree as ET

def parseXML(empty_list,tag_id):
	"""Parse a single metric from the API results and append it to a list"""
	for elem in tree.iter(tag=tag_id):
		empty_list.append(elem.text)

output = open('../map_utils/college_buildings.csv','w')

url = "http://api.geonames.org/search?q=williamsburg&featureCode=S&featureCode=BLDG&featureCode=schc&maxRows=120&east=-10&west=-10&north=10south=0&username=kelvinabrowka"

tree = ET.parse(urllib.urlopen(url))

# Empty lists to which we can append respective XML elements from the API request
names = []
geoname_id = []
loc_type = []
lat = []
lng = []

# Populating the lists using the function
parseXML(names,'name')
parseXML(geoname_id,'geonameId')
parseXML(loc_type,'fcode')
parseXML(lat,'lat')
parseXML(lng,'lng')

# CSV Header
output.write('building,geoname_id,flc_name,lat,long\n')

for i,j,k,l,m in zip(names,geoname_id,loc_type,lat,lng):
	output.write(i + ',' + j + ',' + k + ',' + l + ',' + m + '\n')

output.close()