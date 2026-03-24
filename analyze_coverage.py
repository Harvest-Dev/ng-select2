import json

with open('coverage/coverage-final.json') as f:
    data = json.load(f)

for filepath, info in data.items():
    if 'select2.component.ts' in filepath and 'vitest' not in filepath:
        branches = info.get('branchMap', {})
        branch_counts = info.get('b', {})
        uncovered = []
        for bid, binfo in branches.items():
            counts = branch_counts.get(bid, [])
            for i, count in enumerate(counts):
                if count == 0:
                    loc = binfo['locations'][i]
                    start = loc.get('start', {})
                    end = loc.get('end', {})
                    uncovered.append({
                        'id': bid,
                        'type': binfo.get('type', '?'),
                        'line': start.get('line', 0) or binfo.get('line', 0),
                        'col': start.get('column', 0),
                        'end_line': end.get('line', 0),
                        'end_col': end.get('column', 0),
                        'branch_index': i,
                        'bline': binfo.get('line', 0)
                    })
        uncovered.sort(key=lambda x: (x['bline'], x['col']))
        for u in uncovered:
            print(f"Branch {u['id']}: src_line={u['bline']} loc={u['line']}:{u['col']}-{u['end_line']}:{u['end_col']} type={u['type']} idx={u['branch_index']}")
        print(f'\nTotal uncovered: {len(uncovered)} / {sum(len(v) for v in branch_counts.values())}')
