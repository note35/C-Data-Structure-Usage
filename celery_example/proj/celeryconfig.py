"""
broker_url = 'redis://localhost:6379//'
result_backend = 'db+sqlite:///results.sqlite'

task_serializer = 'json'
result_serializer = 'json'
accept_content = ['application/json']
timezone = 'Asia/Taipei'
enable_utc = True

task_routes = {
    'tasks.add': 'low-priority',
    'tasks.mul': {'rate_limit': '10/m'}
}
"""
