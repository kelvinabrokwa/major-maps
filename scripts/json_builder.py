# This program will build a geoJSON from locations.tsv file

import pandas as p

data = p.read_csv('locations.tsv',sep='\t')
output = open('../map_utils/out_json.txt','w')


place_name = []
for i in data.place_name:
	place_name.append(i)

lat = []
for i in data.latitude:
	i = str(i)
	lat.append(i)

long_ = []
for i in data.longitude:
	i = str(i)
	long_.append(i)

for i,j,k in zip(place_name,lat,long_):
	output.write( \
		'{' + \
		'\n' + \
		'\"type\":\"Feature\",' + \
		'\n' + \
		'\"geometry\": {' + \
		'\n' + \
		'\"type\": \"Point\",' + \
		'\n' + \
		'\"coordinates\": ' + '[' + j + ', ' + k + ']' + \
		'\n' + \
		'},' + \
		'\n' + \
		'\"properties\": {' + \
		'\n' + \
		'\"name\":' '"' + i + '"' + \
		'\n' + \
		'}' + \
		'\n' + \
		'},' + '\n' + '\n')



output.close()